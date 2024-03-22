import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { MessageService } from 'primeng/api';
import { Employee } from '../model/employee-dao';
import { UserRole } from 'src/app/model/login/user-role';
import { Designation } from '../model/designation-dao';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  userform: FormGroup;
  ParentList: Employee[] = [];
  UserRoleList: UserRole[] = [];
  designation_list: Designation[] = [];
  isDisabled:boolean=false;
  UnitList = [
    {
      title: 'unit 1',
      id: 1
    },
    {
      title: 'unit 2',
      id: 2
    },
  ]
  constructor(private _service: EmployeeService, private _messageService: MessageService) { }

  ngOnInit() {
    this.getAllDropList();
    this.userform = new FormGroup(
      {
        id: new FormControl(""),
        full_name: new FormControl("", [Validators.required]),
        username: new FormControl("", [Validators.required]),
        personal_email: new FormControl("", [Validators.required, Validators.email]),
        official_email: new FormControl("", [Validators.email]),
        password: new FormControl("", [Validators.required, Validators.minLength(8)]),
        address: new FormControl("", [Validators.required]),
        disease: new FormControl(""),
        permanent_address: new FormControl(""),
        google_location: new FormControl(""),
        image: new FormControl(""),
        city: new FormControl("", [Validators.required]),
        gender: new FormControl("Male", [Validators.required]),
        phone_number1: new FormControl("", [Validators.required]),//,Validators.pattern("^[0-9]*$"),Validators.min(10),Validators.maxLength(10)]),
        phone_number2: new FormControl(""), //,[Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]),
        dateofbirth: new FormControl("", [Validators.required]),
        is_married: new FormControl(0, [Validators.required]),
        have_children: new FormControl(0, [Validators.required]),
        have_disease: new FormControl(0, [Validators.required]),
        have_insurance: new FormControl(0, [Validators.required]),
        role_id: new FormControl("", [Validators.required]),
        designation_id: new FormControl("", [Validators.required]),
        enrollment_no: new FormControl(""),
        unit: new FormControl(0),
        parentid: new FormControl("")
      });
  }
  // Add() {
  //   this.savedata(this.userform.value);
  // }
  addorUpdateUser()
  {
  
      this._service.user.full_name = this.userform.value.full_name;
      this._service.user.username = this.userform.value.username;
      this._service.user.password = this.userform.value.password;
      this._service.user.address =this.userform.value.address;
      this._service.user.permanent_address = this.userform.value.permanent_address;
      this._service.user.dateofbirth =  this.userform.value.dateofbirth;
      this._service.user.personal_email = this.userform.value.personal_email;
      this._service.user.official_email = this.userform.value.official_email;
      this._service.user.designation_id = this.userform.value.designation_id;
      this._service.user.gender = this.userform.value.gender;
      this._service.user.google_location =this.userform.value.google_location;
      this._service.user.phone_number1 = this.userform.value.phone_number1;
      this._service.user.phone_number2 = this.userform.value.phone_number2;
      this._service.user.role_id= this.userform.value.role_id;
      this._service.user.have_children = this.userform.value.have_children==true?1:0;
      this._service.user.is_married = this.userform.value.is_married==true?1:0;
      this._service.user.have_disease = this.userform.value.have_disease==true?1:0;
      this._service.user.have_insurance = this.isDisabled==true?1:0;
      this._service.user.city = this.userform.value.city;
      this._service.user.enrollment_no= this.userform.value.enrollment_no;
      this._service.user.id=this.userform.value.id;
      this._service.user.parentid=this.userform.value.parentid;
      this._service.user.unit = this.userform.value.unit;
      this._service.user.image = this.uploadUrl==null || "" ? "/assets/img/User.jpg":this.uploadUrl;
      this._service.user.disease = this.userform.value.disease;
      if(this.userform.value.id.length==0)
      {
        this._service.saveUser().subscribe({
          next: (response:any) => {
              if(response)
              {
                // this.notifyService.showSuccess("Successfully Added New Record","Success");
                // window.location.reload();
              }
          },
          error : (error:any)=> 
          {
            // this.notifyService.showError("Failed Adding New Record","Failed");
          }
        
          });
      }
      else
      {
        // this._service.updateUser().subscribe({
        // next: (response:any) => {
        //     if(response)
        //     {
        //       this.notifyService.showSuccess("Successfully Updated existing Record","Success");
        //       window.location.reload();
        //     }
        // },
        // error : (error:any)=> 
        // {
        //   this.notifyService.showError("Failed Updating existing Record","Failed");
        // }
      
        // });
      }
    
  }
  getAllDropList() {
    this._service.getParent().subscribe(list => {
      this.ParentList = list;
      console.log(this.ParentList);

    })

    this._service.getAllDesignations().subscribe(designationlist => {
      this.designation_list = designationlist;
    });
    this._service.getAllUserRoles().subscribe(user_rolelist => {
      this.UserRoleList = user_rolelist;
    });
  }
  UpdateParentList(unit: number) {
    this._service.getParent().subscribe(list => {
      this.ParentList = list;
    })
    this._service.getAllUsers().subscribe(listparents => {
      listparents.filter(x => x.unit == unit).forEach(element => {
        if (!this.ParentList.find(x => x.id === element.id))
          this.ParentList.push(element);
      });
    })
  }
  working = false;
  uploadFile: File | null;
  uploadFileLabel: string | undefined = 'Choose an image to upload';
  uploadProgress: number;
  uploadUrl: string;

  handleFileInput(files: FileList) {
    if (files.length > 0) {
      this.uploadFile = files.item(0);
      this.uploadFileLabel = this.uploadFile?.name;
    }
  }
  upload() {
    if (!this.uploadFile) {
      // this.notifyService.showError("Choose a image to upload first","Image Required");
      return;
    }

    const formData = new FormData();
    formData.append(this.uploadFile.name, this.uploadFile);

    this.uploadUrl = '';
    this.uploadProgress = 0;
    this.working = true;

    this._service.uploadImage(formData).subscribe({
      next: (response: any) => {
        this.uploadUrl = response["url"];
        this.uploadUrl = this.uploadUrl.slice(7, this.uploadUrl.length);
this.userform.controls
      },
      error: (error: any) => {
        // this._service.showError("Failed to upload image","Failed");
        // console.log('error employee add');

      }

    }).add(() => {
      this.working = false;
    });
  }
}
