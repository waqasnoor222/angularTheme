import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DaytypeService } from '../services/daytype.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-daytypeedit',
  templateUrl: './daytypeedit.component.html',
  styleUrls: ['./daytypeedit.component.css']
})
export class DaytypeeditComponent implements OnInit {

  daytypeform: FormGroup;
  pid: any;
  constructor(private _service: DaytypeService, private _messageService: MessageService,private _router: Router) { }

  ngOnInit() {
    this.daytypeform = new FormGroup(
      {
        id: new FormControl(history.state.id),
        title: new FormControl(history.state.title, [Validators.required]),
      });
  }
  update() {
    this.savedata(this.daytypeform.value);
  }
  savedata(data: any) {
    // console.log(this.daytypeform.value);
    this._service.saveDayType(data).subscribe((result) => {
      if (result) {
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Dat Type Add' });
        setTimeout(() => {
          this._router.navigate(['layout/daytype/list']);
        }, 1000);
      }
      else {
        this._messageService.add({ severity: 'error', summary: 'error', detail: 'Dat Type Add' });
      }
    })
  }
}
