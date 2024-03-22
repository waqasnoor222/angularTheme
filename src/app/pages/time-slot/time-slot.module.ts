import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TimeSlotComponent } from './time-slot.component';
import { TimeSlotRouting } from './time-slot-routing';
import { TimeSlotAddComponent } from './time-slot-add/time-slot-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TimeSlotListComponent } from './time-slot-list/time-slot-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { TimeSlotEditComponent } from './time-slot-edit/time-slot-edit.component';

@NgModule({
  imports: [
    CommonModule,
    TimeSlotRouting,
    ReactiveFormsModule,
    TableModule,
    ConfirmDialogModule
  ],
  declarations: [TimeSlotComponent,TimeSlotAddComponent,TimeSlotListComponent,TimeSlotEditComponent],
  providers: [
    ConfirmationService,
    DatePipe
  ]
})
export class TimeSlotModule { }
