import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { SupplierRoutingModule } from './supplier-routing.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// All Component to be loaded
import { SupplierComponent } from '../supplier/supplier-component'
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component'

@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [SupplierComponent,SupplierDetailsComponent, SupplierListComponent]
})
export class SupplierModule { }
