import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { DesignationAddComponent } from './designation-add/designation-add.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { EmploymentHistoryAddComponent } from './employment-history-add/employment-history-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'employee-add', component: EmployeeAddComponent },
  { path: 'employee-list', component: EmployeeListComponent  },
  { path: 'employee-detail', component: EmployeeDetailComponent  },
  { path: 'designation-list', component: DesignationListComponent },
  { path: 'designation-add', component: DesignationAddComponent },
  { path: 'designation-edit', component: DesignationEditComponent },
  { path: 'employment-list', component: EmploymentHistoryComponent },
  { path: 'employment-add', component: EmploymentHistoryAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
