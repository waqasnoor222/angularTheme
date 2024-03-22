import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DaytypeService } from '../services/daytype.service';
import { DayType } from '../model/daytype-dao';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { first } from 'rxjs';

@Component({
  selector: 'app-daytypelist',
  templateUrl: './daytypelist.component.html',
  styleUrls: ['./daytypelist.component.scss']
})
export class DaytypelistComponent implements OnInit {
  dayTypeList: DayType[] = [];
  constructor(private _service: DaytypeService, private router: Router, private _confirmationService: ConfirmationService, private _messageService: MessageService) { }
  @Output() eventChange = new EventEmitter<Event>();
  ngOnInit() {
    this.LoadDayType();
  }
  LoadDayType() {
    this._service.getAllDayTypes().subscribe(response => {
      this.dayTypeList = response;
    });
  }
  Fetch(id: string, title: string) {
    this.router.navigate(['/layout/daytype/edit'], { state: { id: id, title: title } });
  }
  deleteDayType(Id) {
    this._confirmationService.confirm({
      message: 'Do you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._service.deleteDayType(Id)
          .pipe(first()).subscribe({
            next: response => {
              this.eventChange.emit(response.result);
              this._messageService.add({ severity: 'success', summary: 'Day Type', detail: 'Delete Success Fully' });
              this.LoadDayType();
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
  
}
