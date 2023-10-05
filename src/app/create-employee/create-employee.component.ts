import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee=new Employee();
  constructor(private empservice:EmployeeService,
              private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee()
  {
    this.empservice.createEmployee(this.employee).subscribe(
      data =>{
       
        this.goToEmployee();
      },
     error => console.error(error));
        
  }

  goToEmployee()
  {
         this.router.navigate(['/emplyees'])
  }

  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }

}
