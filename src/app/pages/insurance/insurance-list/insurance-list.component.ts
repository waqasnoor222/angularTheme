import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceService } from '../services/insurance.service';
import { EmployeeService } from '../../employee/services/employee-service';
import { Insurance } from '../model/insurance';
import { Employee } from '../../employee/model/employee-dao';
import { InsurancePlan } from '../model/insurance-plan';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  ListInsuranceDetail: Insurance[] = [];
  listusers: Employee[];
  list_InsurancePlan: InsurancePlan[] = [];
  @ViewChild('insurance') dt: Table | undefined;
  constructor(private _insurance_service: InsuranceService, private _employee_service: EmployeeService) { }

  ngOnInit() {
    this.LoadInsurance();
  }
  LoadInsurance() {
    this._insurance_service.getAllInsurancePlan().subscribe(list => {
      this.list_InsurancePlan = list
      // console.log(this.list_InsurancePlan);

    });

    this._employee_service.getAllUsers().subscribe(userlist => {
      this.listusers = userlist
    });
    this._insurance_service.getAllInsuranceDetails().subscribe(list => {
      this.ListInsuranceDetail = list
    });
  }
  CheckValidInsuranceStatus(valid_upto: string): boolean {
    return (new Date(valid_upto)) < (new Date())
  }
  applyFilterGlobal($event: any, stringVal: string) {
    this.dt?.filterGlobal($event.target.value, stringVal);
  }
}
