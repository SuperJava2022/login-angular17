import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableModule } from '../shared/components/datatable.module';
import { InputpasswordComponent } from "../shared/components/inputpassword/inputpassword.component";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    DatatableModule,
    ReactiveFormsModule,
    InputpasswordComponent
]
})
export class AuthModule { }
