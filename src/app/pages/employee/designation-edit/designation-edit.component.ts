import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { MessageService } from 'primeng/api';
import { Designation } from '../model/designation-dao';
import { EmploymentType } from '../model/employement-type';
import { Router } from '@angular/router';
@Component({
  selector: 'app-designation-edit',
  templateUrl: './designation-edit.component.html',
  styleUrls: ['./designation-edit.component.css']
})
export class DesignationEditComponent implements OnInit {

  designationform: FormGroup;
  designation_list: EmploymentType[] = [];
  constructor(private _service: EmployeeService, private _messageService: MessageService, private _router : Router) { }

  ngOnInit() {
    this.LoadDesignation();
    this.designationform = new FormGroup(
      {
        id: new FormControl(history.state.id),
        title: new FormControl(history.state.title, [Validators.required]),
        emptype: new FormControl(history.state.emptype, [Validators.required]),
        description: new FormControl(history.state.description, [Validators.required])
      });
      // console.log(history.state);
      
  }
  Add() {
    this.savedata(this.designationform.value);
  }
  savedata(id: any) {
    // console.log(this.designationform.value);
    this._service.updateDesignation(id).subscribe((result) => {
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
  reset(){
    this.designationform.reset();
    this._router.navigate(['layout/employee/designation-list'])
  }
}

