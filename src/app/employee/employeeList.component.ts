import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from '../employee/employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: '../employee/employeeList.component.html',
    styleUrls: ['../employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    statusMessage: string='Loading Data, Please Wait..';
    employees=IEmployee;

    selectedEmployeeCountRadioButton: string='All';

    constructor(private _employeeService:EmployeeService){
        
    }

   ngOnInit(){
     this._employeeService.getEmployees()
                                          .subscribe((employeesData)=>this.employees=employeesData,
                                                      (error)=> {
                                                        this.statusMessage='Problem with service, Please try after sometime';
                                                      }
                                                    )

   }

    getTotalEmployeesCount(): number{
      return this.employees.length;
    }

    getTotalMaleEmployeesCount():number{
      return this.employees.filter(e=>e.gender==="Male").length;
    }

    getTotalFemaleEmployeesCount():number{
      return this.employees.filter(e=>e.gender==="Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void{
      this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
    }
}