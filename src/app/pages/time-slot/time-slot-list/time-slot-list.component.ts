import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TimeSlotService } from '../../auth/services/time-slot.service';
import { TimeSlot } from '../../auth/dto/time-slot-dto';
import { ConfirmationService } from 'primeng/api';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-slot-list',
  templateUrl: './time-slot-list.component.html',
  styleUrls: ['./time-slot-list.component.css']
})
export class TimeSlotListComponent implements OnInit {
  constructor( private _service : TimeSlotService, private _confirmationService: ConfirmationService,private router: Router,) { }
  list_timeslot:TimeSlot[]=[];
  dataList: any[];
  @Output() eventChange = new EventEmitter<Event>();
  ngOnInit() {
    this.loadTimeSlots();
  }
  loadTimeSlots() {
    this._service.getAllTimeSlots().subscribe(timeslots => {
      this.list_timeslot = timeslots;
    });
  }
  deleteDayType(Id) {
    this._confirmationService.confirm({
      message: 'Do you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this._service.deleteTimeSlot(Id)
          .pipe(first()).subscribe({
            next: response => {
              this.eventChange.emit(response.result);
              // this._messageService.add({ severity: 'success', summary: 'Day Type', detail: 'Delete Success Fully' });
              this.loadTimeSlots();
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
  Fetch(
    id: string,
    check_in_from: number,
    check_in_to: number,
    late_after: string,
    halfday_after: string
     ) 
     {
    this.router.navigate(['/layout/timeslots/timeslot-edit'], 
    { state: 
      { 
        id: id, 
        check_in_from: check_in_from,
        check_in_to: check_in_to,
        late_after: late_after,
        halfday_after: halfday_after,
       }
     }
     );
  }
}
