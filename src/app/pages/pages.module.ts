import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{MatTableModule} from '@angular/material/table';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatPaginatorModule} from '@angular/material/paginator';




import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ToasterComponent } from './toaster/toaster.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { DatatableModule } from "../shared/components/datatable.module";
import { Prueba1Component } from './prueba1/prueba1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputpasswordComponent } from "../shared/components/inputpassword/inputpassword.component";


@NgModule({
  declarations: [
    DashboardComponent,
    HeroesComponent,
    ToasterComponent,
    PagesComponent,
    Prueba1Component
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatPaginatorModule,
    DatatableModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    InputpasswordComponent
]
})
export class PagesModule { }
