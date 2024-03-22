import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InsurancePlan } from '../model/insurance-plan';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-inurance-plan-add',
  templateUrl: './inurance-plan-add.component.html',
  styleUrls: ['./inurance-plan-add.component.css']
})
export class InurancePlanAddComponent implements OnInit {
  InsurancePlan_form: FormGroup;
  // insurancePlan: InsurancePlan;
  insurancePlan: InsurancePlan = new InsurancePlan();
  constructor(private _insuranceService: InsuranceService) { }

  ngOnInit() {
    this.InsurancePlan_form = new FormGroup(
      {
        id: new FormControl(""),
        plan_name: new FormControl("", [Validators.required]),
        valid_upto: new FormControl("", [Validators.required]),
        hospital_limit: new FormControl(0, [Validators.required]),
        room_limit: new FormControl(0, [Validators.required]),
        normal_delivery: new FormControl(0),
        complicated_delivery: new FormControl(0)

      });
  }
  save() {
    this.addInsurancePlan(this.insurancePlan);
  }
  addInsurancePlan(insurancePlan: InsurancePlan) {
    if (this.InsurancePlan_form.valid) {
      insurancePlan.id = this.InsurancePlan_form.value.id;
      insurancePlan.plan_name = this.InsurancePlan_form.value.plan_name;
      insurancePlan.valid_upto = this.InsurancePlan_form.value.valid_upto;
      insurancePlan.hospital_limit = this.InsurancePlan_form.value.hospital_limit;
      insurancePlan.room_limit = this.InsurancePlan_form.value.room_limit;
      insurancePlan.normal_delivery = this.InsurancePlan_form.value.normal_delivery;
      insurancePlan.complicated_delivery = this.InsurancePlan_form.value.complicated_delivery;
      if (!this.InsurancePlan_form.value.id) {
        // console.log("abc")
        this._insuranceService.saveInsurancePlan(this.insurancePlan).subscribe({
          next: (response: any) => {
            if (response) {
              // this.notifyService.showSuccess("Successfully Added New Record","Success");
              // window.location.reload();
            }
          },
          error: (error: any) => {
            // console.log(error)
            // this.notifyService.showError("Failed Adding New Record","Failed");
          }

        });
      }
      else {
        // this.InsurancePlanService.updateInsurancePlan().subscribe({
        // next: (response:any) => {
        //     if(response)
        //     {
        //       this.notifyService.showSuccess("Successfully Updated existing Record","Success");
        //       window.location.reload();
        //     }
        // },
        // error : (error:any)=> 
        // {
        //   console.log(error)
        //   this.notifyService.showError("Failed Updating existing Record","Failed");
        // }

        // });
      }
    }
    else {
      // this.notifyService.showError("Invalid form Submission","Invalid");
    }

  }
}
