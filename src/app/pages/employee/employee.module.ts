import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutingModule } from './employee.routing';
import { TableModule } from 'primeng/table';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DesignationAddComponent } from './designation-add/designation-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DesignationEditComponent } from './designation-edit/designation-edit.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { EmploymentHistoryAddComponent } from './employment-history-add/employment-history-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    TableModule,
    ReactiveFormsModule,
    ToastModule,
    DropdownModule,
    ConfirmDialogModule
  ],
  declarations: [EmployeeComponent,EmployeeListComponent,DesignationAddComponent,EmployeeAddComponent,DesignationListComponent,DesignationEditComponent,EmploymentHistoryComponent,EmploymentHistoryAddComponent,EmployeeDetailComponent],
  providers: [
    ConfirmationService,
    DatePipe
  ]
})
export class EmployeeModule { }
