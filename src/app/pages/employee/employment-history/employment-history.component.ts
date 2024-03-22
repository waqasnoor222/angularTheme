import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../model/employee-dao';
import { Employment } from '../../auth/dao/employment-dao';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.css']
})
export class EmploymentHistoryComponent implements OnInit {

  constructor(private _service : EmployeeService) { }
  listEmployees: Employee[] = [];
  listemployment: Employment[] = [];
  
  ngOnInit() {
    this.LoadEmploymentHistory();
  }
  LoadEmploymentHistory()
  {
    this._service.getAllUsers().subscribe(user=> {
      this.listEmployees=user;    
    });
    this._service.getAllEmploymentRecord().subscribe(employRecords => {
      this.listemployment = employRecords;
      // console.log(this.listemployment);
      
    });
  }
}
