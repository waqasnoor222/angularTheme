import { Component, OnInit } from '@angular/core';
import { InsurancePlan } from '../model/insurance-plan';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-plan-list',
  templateUrl: './insurance-plan-list.component.html',
  styleUrls: ['./insurance-plan-list.component.css']
})
export class InsurancePlanListComponent implements OnInit {
  list_InsurancePlan: InsurancePlan[]
  constructor( private _insuranceService : InsuranceService) { }

  ngOnInit() {
    this.getAllInsurancePlan();
  }
  getAllInsurancePlan() {
    this._insuranceService.getAllInsurancePlan().subscribe(response=>{
      this.list_InsurancePlan = response;
      console.log(this.list_InsurancePlan);
      
    })
  }
}
