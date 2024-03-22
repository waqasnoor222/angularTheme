import { Component, OnInit } from '@angular/core';
import { User } from '../model/user-dto';
import { EmployeeService } from '../services/employee-service';
import { Designation } from '../model/designation-dao';
import { FamilyDetails } from '../model/employee-detail-dao';
import { Employment } from '../../auth/dao/employment-dao';
import { Acadamics } from '../model/acadamics-dao';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  user: User = new User();
  listfamilyDetails: FamilyDetails[] = [];
  designation_list: Designation[] = [];
  listemployment:Employment[]=[];
  listacademics:Acadamics[]=[];
  constructor(private _service: EmployeeService) { }

  ngOnInit() {
    this.LoadEmployeeDetails();
  }
  LoadEmployeeDetails() {
    try {
      var user_id = history.state.userid;
      this.user.id = user_id;
      //console.log("userid",history.state.userid);
      this._service.getUserbyId(this.user.id).subscribe(userdetails => {
        this.user.designation = new Designation();
        this.user = userdetails;
        // console.log(this.user);

        //this.showLoader=true;
      });
      // this._service.getAllDesignations().subscribe(designationlist=> {
      //   this.designation_list=designationlist;
      //   console.log(this.designation_list);
      // });
      this._service.getFamilyDetailsbyUserId(this.user.id).subscribe(familylist => {
        this.listfamilyDetails = familylist;
        // console.log(this.listfamilyDetails);
        
      });
      this._service.getEmploymentRecordByUserId(this.user.id).subscribe(employment_list=> {
        this.listemployment=employment_list;
      });
      this._service.getAcademictRecordByUserId(this.user.id).subscribe(academic_list=> {
        this.listacademics=academic_list;
      });
      // .add(() => {

      //   this.showLoader = false;
      //    });
    }
    catch (error) {

    }
  }
}
