import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Insurance } from '../model/insurance';
import { InsuranceService } from '../services/insurance.service';
import { InsurancePlan } from '../model/insurance-plan';
import { EmployeeService } from '../../employee/services/employee-service';
import { User } from '../../employee/model/user-dto';
import { Employee } from '../../employee/model/employee-dao';
import { FamilyDetails } from '../model/family-detail';

@Component({
  selector: 'app-insurance-add',
  templateUrl: './insurance-add.component.html',
  styleUrls: ['./insurance-add.component.css']
})
export class InsuranceAddComponent implements OnInit {
  Insuranceform: FormGroup;
  InsuranceDetail: Insurance = new Insurance();
  InsuranceDetailList: Insurance[] = [];
  list_InsurancePlan: InsurancePlan[] = [];
  listusers: Employee[];
  ListInsuranceDetail: Insurance[] = [];
  count: number = 0;
  listFamily: FamilyDetails[]=[];
  listfamilyDetails : FamilyDetails [];
  CancelInsurance: FormGroup;
  constructor(private _service: InsuranceService, private _employeeService: EmployeeService,private formbuilder: FormBuilder,) { }

  ngOnInit() {
    this.LoadInsurance();
    this.Insuranceform = this.formbuilder.group({
      userid:[''],
      card_number: new FormControl('',[Validators.required]),
      insuranceplanid:new FormControl('',[Validators.required]),
      insurance: this.formbuilder.array([])
    });
    this.CancelInsurance=new FormGroup(
    {
      userid : new FormControl("",[Validators.required]),
      reason: new FormControl(""),
    });
  }
  save(){
    this.AddorUpdateInsuranceRecord(this.InsuranceDetail);
  }
  AddorUpdateInsuranceRecord( InsuranceDetail : Insurance) {
    // this.InsuranceService.InsuranceDetailList=[];
    if (this.Insuranceform.valid) {
      console.log(this.Insuranceform)
      for (let i = 0; i < this.Insuranceform.controls['insurance'].value.length; i++) {
        InsuranceDetail.card_number = this.Insuranceform.controls["card_number"].value;
        InsuranceDetail.description = this.Insuranceform.controls["insurance"].value.at(i).description;
        InsuranceDetail.familyid = this.Insuranceform.controls["insurance"].value.at(i).familyid;
        InsuranceDetail.id = this.Insuranceform.controls["insurance"].value.at(i).insuranceid || "";
        InsuranceDetail.insuranceplanid = this.Insuranceform.controls["insuranceplanid"].value;
        InsuranceDetail.userid = this.Insuranceform.controls['userid'].value;
        this.InsuranceDetailList.push(this.InsuranceDetail);
      }
      if (!this.Insuranceform.controls['insurance'].value[0].insuranceid) {
        this._service.saveInsuranceDetails(this.InsuranceDetail).subscribe({
          next: (response: any) => {
            if (response) {
              // this.notifyService.showSuccess("Successfully Added New  Record","Success");

              for(let i=0 ;i< this.Insuranceform.controls["insurance"].value.length;i++)
              this.RemoveInsuranceDetails(i)
              this._service.getAllInsuranceDetails().subscribe(insurance_list=> {
                this.ListInsuranceDetail=insurance_list;
              });
            }
          },
          error: (error: any) => {
            console.log(error)
            // this.notifyService.showError("Failed Adding New Record","Failed");
          }
        });
      }
      else {
        // this.InsuranceService.updateInsuranceDetails().subscribe({
        //   next: (response:any) => {
        //       if(response)
        //       {
        //         this.notifyService.showSuccess("Successfully Updated existing Record","Success");

        //         for(let i=0 ;i< this.Insuranceform.controls["insurance"].value.length;i++)
        //         this.RemoveInsuranceDetails(i)
        //         this.InsuranceService.getAllInsuranceDetails().subscribe(insurance_list=> {
        //           this.InsuranceService.ListInsuranceDetail=insurance_list;
        //         });
        //       }
        //   },
        //   error : (error:any)=> 
        //   {
        //     console.log(error)
        //     this.notifyService.showError("Failed Updating existing Record","Failed");
        //   }});
      }
    }
    else {
      // this.notifyService.showError("Invalid Form Submission","Invalid");
    }
  }

  LoadInsurance() {
    this._service.getAllInsurancePlan().subscribe(list => {
      this.list_InsurancePlan = list
    });

    this._employeeService.getAllUsers().subscribe(userlist => {
      this.listusers = userlist
    });
    this._service.getAllInsuranceDetails().subscribe(list => {
      this.ListInsuranceDetail = list
    });
  }
  getInsuranceDetails() {
    return this.Insuranceform.get('insurance') as FormArray
  }
  RemoveInsuranceDetails(i: number) {
    return this.getInsuranceDetails().removeAt(i);
  }
  getFilterRelation(userid: string) {
    // this.listFamily = []
    this._service.getFamilyDetailsbyUserId(userid).subscribe(familylist => {
      this.listFamily = familylist
      familylist.forEach(element => {
        if ((element.userid.includes(userid))) {
          this.listFamily.push(element);
        }
      });
    })
    return this.listFamily;
  }
  FetchData(userid: string) {
    this.count = this.getInsuranceDetails().length;
    while (this.getInsuranceDetails().length != 0) {

      this.RemoveInsuranceDetails(this.count);
      this.count -= 1;
    }
    this.listFamily = this.getFilterRelation(userid);
    const history = this.Insuranceform.controls['insurance'] as FormArray;
    this._service.getInsuranceDetailsbyUserId(userid).subscribe({
      next: (response: any) => {
        if (response) {
          response.forEach((element: any) => {
            if ((element.userid.includes(userid))) {
              this.Insuranceform.controls['card_number'].patchValue(element.card_number);
              this.Insuranceform.controls['userid'].patchValue(element.userid);
              this.Insuranceform.controls['insuranceplanid'].patchValue(element.insuranceplanid);


              history.push(this.formbuilder.group({
                insuranceid: element.id,
                familyid: element.familyid,
                description: element.description
              }));
              this.Insuranceform.controls['insurance'].value.setValue = history;
            }
          })
        }
      },
      error: (error: any) => {
        this.Insuranceform.controls['card_number'].patchValue("");
        this.Insuranceform.controls['userid'].patchValue(userid);
        this.Insuranceform.controls['insuranceplanid'].patchValue("");


        history.push(this.formbuilder.group({
          insuranceid: new FormControl(""),
          familyid: new FormControl(""),
          description: new FormControl
        }));
        this.Insuranceform.controls['insurance'].value.setValue = history;
      }
    });

  }
  trackByFn(index:any, item:any) {
    return index;
  }
}
