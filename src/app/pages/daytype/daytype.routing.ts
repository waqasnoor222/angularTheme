import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaytypelistComponent } from './daytypelist/daytypelist.component';
import { DaytypeaddComponent } from './daytypeadd/daytypeadd.component';
import { DaytypeeditComponent } from './daytypeedit/daytypeedit.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DaytypelistComponent },
  { path: 'add', component: DaytypeaddComponent },
  { path: 'edit', component: DaytypeeditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayTypeRoutingModule { }
