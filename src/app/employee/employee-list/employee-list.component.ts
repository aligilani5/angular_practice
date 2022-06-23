import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: any[];

  constructor() { 

    this.employeeList = [
      {EmployeeId: 151, Name: 'Shahid', Gender: 'Male', Salary: 15000},
      {EmployeeId: 152, Name: 'Mudassar', Gender: 'Male', Salary: 20000},
      {EmployeeId: 153, Name: 'Qasim', Gender: 'Male', Salary: 12000},
      {EmployeeId: 154, Name: 'Hamid', Gender: 'Male', Salary: 17000},
      {EmployeeId: 155, Name: 'Waseem', Gender: 'Male', Salary: 15000},
    ];
  }

  ngOnInit(): void {
  }

}
