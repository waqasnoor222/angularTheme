import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceAddComponent } from './insurance-add/insurance-add.component';
import { InsurancePlanListComponent } from './insurance-plan-list/insurance-plan-list.component';
import { InurancePlanAddComponent } from './inurance-plan-add/inurance-plan-add.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'insurance-list', component: InsuranceListComponent },
  { path: 'insurance-add', component: InsuranceAddComponent },
  { path: 'plan-list', component: InsurancePlanListComponent },
  { path: 'plan-add', component: InurancePlanAddComponent },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutinModule { }

