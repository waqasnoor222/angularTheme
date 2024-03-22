import { Component, OnInit } from '@angular/core';
import { UserRole } from '../model/user-dto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../services/role.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {
  roleForm: FormGroup;
  constructor(private _service: RoleService, private _messageService : MessageService) { }

  ngOnInit() {
    this.roleForm = new FormGroup(
      {
        // id: new FormControl(""),
        title: new FormControl("", [Validators.required]),
      });
  }
  Add() {
    this.savedata(this.roleForm.value);
  }
  savedata(data: any) {
    // console.log(this.designationform.value);
    this._service.saveUserRole(data).subscribe((result) => {
      if (result) {
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Add Role' });
        setTimeout(() => {
          this.roleForm.reset();
        }, 1000);
      }
      else {
        this._messageService.add({ severity: 'error', summary: 'error', detail: 'Dat Type Add' });

      }
    })
  }
}
