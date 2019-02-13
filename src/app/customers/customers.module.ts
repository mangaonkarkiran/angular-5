import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { FilterdataPipe } from '../pipe/filterdata.pipe';


@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    CustomerListComponent,
    FilterdataPipe
  ]
})
export class CustomersModule { }
