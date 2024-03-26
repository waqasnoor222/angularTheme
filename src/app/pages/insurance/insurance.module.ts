import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { InsuranceComponent } from './insurance.component';
import { InsuranceRoutinModule } from './insurance.routing';
import { TableModule } from 'primeng/table';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { InsuranceAddComponent } from './insurance-add/insurance-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsurancePlanListComponent } from './insurance-plan-list/insurance-plan-list.component';
import { InurancePlanAddComponent } from './inurance-plan-add/inurance-plan-add.component';
import { InsurancePlanEditComponent } from './insurance-plan-edit/insurance-plan-edit.component';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutinModule,
    TableModule,
    TooltipModule,
    BadgeModule,
    ReactiveFormsModule
  ],
  declarations: [InsuranceComponent,InsuranceListComponent,InsuranceAddComponent,InsurancePlanListComponent,InurancePlanAddComponent,InsurancePlanEditComponent],
  providers: [DatePipe]
})

export class InsuranceModule { }
