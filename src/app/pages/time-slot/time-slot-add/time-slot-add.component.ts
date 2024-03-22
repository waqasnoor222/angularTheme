import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeSlotService } from '../../auth/services/time-slot.service';

@Component({
  selector: 'app-time-slot-add',
  templateUrl: './time-slot-add.component.html',
  styleUrls: ['./time-slot-add.component.css']
})
export class TimeSlotAddComponent implements OnInit {
  timeslotform: FormGroup;
  constructor(private _services : TimeSlotService) { }

  ngOnInit() {
    this.timeslotform= new FormGroup(
      {
        id : new FormControl(""),
        check_in_from : new FormControl("",[Validators.required]),
        check_in_to : new FormControl("",[Validators.required]),
        late_after : new FormControl("",[Validators.required]),
        halfday_after : new FormControl("",[Validators.required])
      });
  }
  AddTimeSlot()
  {
    if(this.timeslotform.value)
    {
      this._services.timeslot.id = this.timeslotform.value.id;
      this._services.timeslot.check_in_from = this.timeslotform.value.check_in_from;
      this._services.timeslot.check_in_to = this.timeslotform.value.check_in_to;
      this._services.timeslot.late_after = this.timeslotform.value.late_after;
      this._services.timeslot.halfday_after = this.timeslotform.value.halfday_after;
      if(this._services.timeslot.id.length==0)
      {
      this._services.saveTimeSlot().subscribe(
        {
          next: (response:any) => {
            if(response)
            {
              // this.notifyService.showSuccess("Successfully Added the Record","Success");
              // window.location.reload();
            }
        },
        error : (error:any)=> 
        {
          console.log(error)
          // this.notifyService.showError("Failed Adding the Record","Failed");
        }
        });
      }
      else
      {
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
            console.log(error)
            // this.notifyService.showError("Failed Updating existing Record","Failed");
          }
          });
      }
    }
    else
    {
      // this.notifyService.showError("Invalid form Submission","Invalid");
      // window.location.reload();
    }
  }
}
