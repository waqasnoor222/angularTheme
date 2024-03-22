import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { MessageService } from 'primeng/api';
import { Designation } from '../model/designation-dao';
import { EmploymentType } from '../model/employement-type';
import { Router } from '@angular/router';
import { Employee } from '../model/employee-dao';

@Component({
  selector: 'app-designation-add',
  templateUrl: './designation-add.component.html',
  styleUrls: ['./designation-add.component.css']
})
export class DesignationAddComponent implements OnInit {
  designationform: FormGroup;
  designation_list: EmploymentType[] = [];
  ParentList:Employee[]=[];
  constructor(private _service: EmployeeService, private _messageService: MessageService, private _router: Router) { }

  ngOnInit() {
    this.LoadDesignation();
    this.designationform = new FormGroup(
      {
        id: new FormControl(""),
        title: new FormControl("", [Validators.required]),
        emptype: new FormControl("", [Validators.required]),
        description: new FormControl("", [Validators.required])
      });
  }
  Add() {
    this.savedata(this.designationform.value);
  }
  savedata(data: any) {
    // console.log(this.designationform.value);
    this._service.saveDesignation(data).subscribe((result) => {
      if (result) {
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Add Destination' });
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
      else {
        this._messageService.add({ severity: 'error', summary: 'error', detail: 'Dat Type Add' });

      }
    })
  }
  LoadDesignation() {
    this._service.getAllEmpTypes().subscribe(emptype => {
      // console.log(emptype, "designation list");
      this.designation_list = emptype;
    });
  }
  reset() {
    this.designationform.reset();
    this._router.navigate(['layout/employee/designation-list'])
  }
 
}
