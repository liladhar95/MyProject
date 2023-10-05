import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService,
    private route:ActivatedRoute,
    private router:Router) { }
id:number;
  employee:Employee=new Employee();

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.empService.getEmployeeById(this.id).subscribe(data =>{
      this.employee=data;
    }, error =>console.log(error));
  }

  goToEmployee()
  {
         this.router.navigate(['/emplyees']);
  }

  onSubmit()
  {
    this.empService.updateEmployee(this.id, this.employee).subscribe(data =>{
       this.goToEmployee();
    }
    , error =>console.log(error));
    
    
   
  }

}
