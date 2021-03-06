import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: EmployeeListComponent, pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class EmployeeModule { }
