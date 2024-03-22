import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleRoutingModule } from './role.routing';
import { RoleAddComponent } from './role-add/role-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    ReactiveFormsModule,
    ToastModule
  ],
  declarations: [RoleComponent,RoleListComponent,RoleAddComponent]
})
export class RoleModule { }
