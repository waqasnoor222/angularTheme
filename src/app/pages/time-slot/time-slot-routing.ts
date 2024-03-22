import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimeSlotAddComponent } from './time-slot-add/time-slot-add.component';
import { TimeSlotListComponent } from './time-slot-list/time-slot-list.component';
import { TimeSlotEditComponent } from './time-slot-edit/time-slot-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'timeslot-list', pathMatch: 'full' },
  { path: 'timeslot-list', component: TimeSlotListComponent },
  { path: 'timeslot-add', component: TimeSlotAddComponent },
  { path: 'timeslot-edit', component: TimeSlotEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeSlotRouting { }
