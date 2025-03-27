import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { InputtextComponent } from './inputtext/inputtext.component';
import { TableModule } from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar'
import {ButtonModule} from 'primeng/button'
import {SplitButtonModule} from 'primeng/splitbutton'
import {InputTextModule as Input} from 'primeng/inputtext'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    DatatableComponent,
    InputtextComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    Input,
    FormsModule,
    ReactiveFormsModule,
],
  exports: [DatatableComponent,InputtextComponent]
})
export class DatatableModule { }
