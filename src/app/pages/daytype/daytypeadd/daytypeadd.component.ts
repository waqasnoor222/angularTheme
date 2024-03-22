import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DaytypeService } from '../services/daytype.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-daytypeadd',
  templateUrl: './daytypeadd.component.html',
  styleUrls: ['./daytypeadd.component.css']
})
export class DaytypeaddComponent implements OnInit {
  daytypeform: FormGroup;
  constructor(private _service : DaytypeService, private _messageService : MessageService) { }

  ngOnInit() {
    this.daytypeform = new FormGroup(
      {
        id: new FormControl(""),
        title: new FormControl("", [Validators.required]),
      });
  }
  AddorEdit() {
    this.savedata(this.daytypeform.value);
   }
  savedata(data :any){
    // console.log(this.daytypeform.value);
    this._service.saveDayType(data).subscribe((result)=>{
      if(result){
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Dat Type Add' });
      }
      else
      {
        this._messageService.add({ severity: 'error', summary: 'error', detail: 'Dat Type Add' });
        
      }
    })
    
  }
}
