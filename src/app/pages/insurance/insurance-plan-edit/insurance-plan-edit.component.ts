import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-plan-edit',
  templateUrl: './insurance-plan-edit.component.html',
  styleUrls: ['./insurance-plan-edit.component.css']
})
export class InsurancePlanEditComponent implements OnInit {

  constructor(private date: DatePipe) { }
  InsurancePlan_form: FormGroup
  ngOnInit() {

    this.InsurancePlan_form = new FormGroup(
      {
        id: new FormControl(history.state.id),
        plan_name: new FormControl(history.state.plan_name, [Validators.required]),
        // valid_upto: new FormControl(history.state.valid_upto, [Validators.required]),
        valid_upto: new FormControl(this.date.transform(history.state.valid_upto,'yyyy-MM-dd'),[Validators.required]),
        hospital_limit: new FormControl(history.state.hospital_limit, [Validators.required]),
        normal_delivery: new FormControl(history.state.normal_delivery, [Validators.required]),
        complicated_delivery: new FormControl(history.state.complicated_delivery, [Validators.required]),
        room_limit: new FormControl(history.state.room_limit, [Validators.required])
      });
  }
  save() {

  }
}
