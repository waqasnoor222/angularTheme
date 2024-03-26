import { Component, OnInit } from '@angular/core';
import { InsurancePlan } from '../model/insurance-plan';
import { InsuranceService } from '../services/insurance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-plan-list',
  templateUrl: './insurance-plan-list.component.html',
  styleUrls: ['./insurance-plan-list.component.css']
})
export class InsurancePlanListComponent implements OnInit {
  list_InsurancePlan: InsurancePlan[]
  constructor( private _insuranceService : InsuranceService, private router : Router) { }

  ngOnInit() {
    this.getAllInsurancePlan();
  }
  getAllInsurancePlan() {
    this._insuranceService.getAllInsurancePlan().subscribe(response=>{
      this.list_InsurancePlan = response;
      console.log(this.list_InsurancePlan);
      
    })
  }
  Fetch(
    id: string,
    plan_name: number,
    valid_upto: number,
    hospital_limit: string,
    room_limit: string,
    normal_delivery: string,
    complicated_delivery: string,
     ) 
     {
    this.router.navigate(['/layout/insurance/plan-edit'], 
    { state: 
      { 
        id: id, 
        plan_name: plan_name,
        valid_upto: valid_upto,
        hospital_limit: hospital_limit,
        room_limit: room_limit,
        normal_delivery: normal_delivery,
        complicated_delivery: complicated_delivery,
       }
     }
     );
  }

}
