import { Component, OnInit } from '@angular/core';
import { EmployeeList } from '../interfaces/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: EmployeeList[];

  constructor() { 

    this.employeeList = [
      {EmployeeId: 151, Name: 'Shahid', Gender: 'Male', Salary: 15000},
      {EmployeeId: 152, Name: 'Abc', Gender: 'Female', Salary: 20000},
      {EmployeeId: 153, Name: 'Qasim', Gender: 'Male', Salary: 12000},
      {EmployeeId: 154, Name: 'Hamid', Gender: 'Male', Salary: 17000},
      {EmployeeId: 155, Name: 'Xyz', Gender: 'Female', Salary: 16000},
      {EmployeeId: 156, Name: 'Waseem', Gender: 'Male', Salary: 15000},
    ];
  }

  ngOnInit(): void {
  }

  public selectedEmployee: string = 'All';

  public getAllEmployees(): number{

    return this.employeeList.length;
  }

  public getMaleEmployees(): number{

    return this.employeeList.filter(m => m.Gender === 'Male').length;
  }

  public getFemaleEmployees(): number{

    return this.employeeList.filter(m => m.Gender === 'Female').length;
  }

  public onEventRadioValueChange(selectedRadioValue: string): void{

    this.selectedEmployee = selectedRadioValue;
  }
}
