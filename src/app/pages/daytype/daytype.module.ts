import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaytypeComponent } from './daytype.component';
import { DayTypeRoutingModule } from './daytype.routing';
import { DaytypelistComponent } from './daytypelist/daytypelist.component';
import { DaytypeaddComponent } from './daytypeadd/daytypeadd.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DaytypeeditComponent } from './daytypeedit/daytypeedit.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    DayTypeRoutingModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmDialogModule
  ],
  declarations: [DaytypeComponent,DaytypelistComponent,DaytypeaddComponent,DaytypeeditComponent],
  providers: [
    ConfirmationService
  ]
})
export class DaytypeModule { }
