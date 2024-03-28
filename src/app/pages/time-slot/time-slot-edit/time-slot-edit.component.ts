import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeSlotService } from '../../auth/services/time-slot.service';

@Component({
  selector: 'app-time-slot-edit',
  templateUrl: './time-slot-edit.component.html',
  styleUrls: ['./time-slot-edit.component.css']
})
export class TimeSlotEditComponent implements OnInit {
  constructor(private date:DatePipe,private _services : TimeSlotService) { }
  timeslotform: FormGroup;
  // check_in_from: number;
  // check_in_to: number;
  ngOnInit() {
    // this.check_in_from = history.state ? history.state.check_in_from : '';
    this.timeslotform = new FormGroup(
      {
        id: new FormControl(history.state.id),
        check_in_from: new FormControl(this.date.transform(history.state.check_in_from,'HH:mm'), [Validators.required]),
        check_in_to: new FormControl(this.date.transform(history.state.check_in_to,'HH:mm'),[Validators.required]),
        late_after: new FormControl(history.state.late_after, [Validators.required]),
        halfday_after: new FormControl(history.state.halfday_after, [Validators.required])
      });
  }
  UpdateTimeSlot()
  {
    if(this.timeslotform.value)
    {
      this._services.timeslot.id = this.timeslotform.value.id;
      this._services.timeslot.check_in_from = this.timeslotform.value.check_in_from;
      this._services.timeslot.check_in_to = this.timeslotform.value.check_in_to;
      this._services.timeslot.late_after = this.timeslotform.value.late_after;
      this._services.timeslot.halfday_after = this.timeslotform.value.halfday_after;
      this._services.updateTimeSlot().subscribe(
          {
            next: (response:any) => {
              if(response)
              {
                // this.notifyService.showSuccess("Successfully Updated the Existing Record","Success");
                // window.location.reload();
              }
          },
          error : (error:any)=> 
          {
            // console.log(error)
            // this.notifyService.showError("Failed Updating existing Record","Failed");
          }
          });
      
    }
    else
    {
      // this.notifyService.showError("Invalid form Submission","Invalid");
      // window.location.reload();
    }
  }

}
