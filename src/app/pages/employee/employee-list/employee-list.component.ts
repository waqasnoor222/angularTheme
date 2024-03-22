import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../model/employee-dao';
import { Table } from 'primeng/table';
import { User } from '../model/user-dto';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { first } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private _service: EmployeeService, private router: Router, private _confirmationService : ConfirmationService) { }
  @Output() eventChange = new EventEmitter<Event>();
  listusers: Employee[] = [];
  user: User = new User();
  @ViewChild('employee') dt: Table | undefined;
  ngOnInit() {
    this.LoadEmployees();
  }
  LoadEmployees() {
    this._service.getAllUsers().subscribe(userlist => {
      this.listusers = userlist;
      // console.log(this.listusers);

    });

  }
  applyFilterGlobal($event: any, stringVal: string) {

    this.dt?.filterGlobal($event.target.value, stringVal);
  }
  ViewDetails(userid:string)
  {
    this.user.id= userid;
    this.router.navigate(['layout/employee/employee-detail'], {state:{userid: (userid)}});
  }

  deleteEmployee(Id) {
    this._confirmationService.confirm({
      message: 'Do you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._service.deleteUser(Id)
          .pipe(first()).subscribe({
            next: response => {
              this.eventChange.emit(response.result);
              // this._messageService.add({ severity: 'success', summary: 'Day Type', detail: 'Delete Success Fully' });
              this.LoadEmployees();
            },
            error: error => {
              // this._messageService.add({ severity: 'error', summary: 'Failed', detail: error.error.message, life: 3000 });
            }
          });
      },
      reject: () => {
      }
    });
  }

}
