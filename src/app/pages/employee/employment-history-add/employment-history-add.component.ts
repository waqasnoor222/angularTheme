import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../model/employee-dao';
import { Employment } from '../../auth/dao/employment-dao';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employment-history-add',
  templateUrl: './employment-history-add.component.html',
  styleUrls: ['./employment-history-add.component.css']
})
export class EmploymentHistoryAddComponent implements OnInit {
  employment: FormGroup;
  constructor(private _service: EmployeeService, private formbuilder: FormBuilder, private date: DatePipe) { }
  listusers: Employee[] = [];
  listemployment: Employment[] = [];
  count: number;
  ngOnInit() {
    this.employment = this.formbuilder.group({
      userid: [''],
      employment_history: this.formbuilder.array([]),
    });
    this.LoadEmploymentHistory();
  }
  LoadEmploymentHistory() {
    this._service.getAllUsers().subscribe(user => {
      this.listusers = user;
    });
    this._service.getAllEmploymentRecord().subscribe(employRecords => {
      this.listemployment = employRecords;
    });
  }
  AddEmploymentHistory() {

  }
  FetchData(userid: string, status: string) {

    this.employment.controls["userid"].patchValue(userid);
    const history = this.employment.controls['employment_history'] as FormArray;
    history.clear();
    this.count = this.getEmploymentHistory().length;

    this.employment.controls['employment_history'].value.setValue = []
    while (this.getEmploymentHistory().length != 0) {
      this.RemoveEmploymentHistory(this.count);
      this.count -= 1;
    }
    this.listemployment.forEach(element => {
      if ((element.userid.includes(userid))) {
        history.push(this.formbuilder.group({
          id: element.id,
          company_name: element.company_name,
          start_date: this.date.transform(element.start_date, 'yyyy-MM-dd'),
          end_date: this.date.transform(element.end_date, 'yyyy-MM-dd'),
          designation: element.designation,
          salary: element.salary,
          job_description: element.job_description,
          reason: element.reason,
          userid: element.userid
        }));
        this.employment.controls['employment_history'].value.setValue = history;
      }

    });

    //this.employment.controls['employment_history'].value.pop();
  }
  getEmploymentHistory() {
    return this.employment.get('employment_history') as FormArray
  }
  RemoveEmploymentHistory(i: number) {
    return this.getEmploymentHistory().removeAt(i);
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  AddRecord() {
    const history = this.employment.controls['employment_history'] as FormArray;
    history.push(this.formbuilder.group({
      id: new FormControl(""),
      company_name: new FormControl("", [Validators.required]),
      start_date: new FormControl("", [Validators.required]),
      end_date: new FormControl("", [Validators.required]),
      designation: new FormControl("", [Validators.required]),
      salary: new FormControl(0),
      job_description: new FormControl(""),
      reason: new FormControl("")
    }));
  }
}