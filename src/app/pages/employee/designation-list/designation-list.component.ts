import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Designation } from '../model/designation-dao';
import { Table } from 'primeng/table';
import { first } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})
export class DesignationListComponent implements OnInit {

  constructor(private _service: EmployeeService, private _messageService : MessageService, private _confirmationService : ConfirmationService,private router: Router,) { }
  desinationList: Designation[];
  @Output() eventChange = new EventEmitter<Event>();
  @ViewChild('designation') dt: Table | undefined;
  ngOnInit() {
    this.LoadDesignation();
  }
  LoadDesignation() {
    this._service.getAllDesignations().subscribe(deslist => {
      this.desinationList = deslist;
      console.log(this.desinationList);

    });
  }
  applyFilterGlobal($event: any, stringVal: string) {

    this.dt?.filterGlobal($event.target.value, stringVal);
  }
  DeleteDesignation(Id) {
    this._confirmationService.confirm({
      message: 'Do you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._service.deleteDesignation(Id)
          .pipe(first()).subscribe({
            next: response => {
              this.eventChange.emit(response.result);
              this._messageService.add({ severity: 'success', summary: 'Day Type', detail: 'Delete Success Fully' });
              this.LoadDesignation();
            },
            error: error => {
              this._messageService.add({ severity: 'error', summary: 'Failed', detail: error.error.message, life: 3000 });
            }
          });
      },
      reject: () => {
      }
    });
  }
  EditDestination(id: string, title: string, description : string, emptype:  string) {
    this.router.navigate(['/layout/employee/designation-edit'], { state: { id: id, title: title ,description: description, emptype : emptype } });
  }
}
