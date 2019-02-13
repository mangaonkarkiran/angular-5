import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpModule } from '@angular/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AssigneeRoutingModule } from './Assignee-routing.module';

import { TreeTableModule } from 'primeng/treetable';

// All Component to be loaded
import { AssigneeComponent } from '../assignee/assignee-component'
import { AssigneeListComponent } from './assignee-list/assignee-list.component';
import { AssigneeDetailsComponent } from './assignee-details/assignee-details.component';

@NgModule({
  imports: [
    CommonModule,
    AssigneeRoutingModule,
    TreeTableModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [AssigneeComponent,AssigneeListComponent, AssigneeDetailsComponent]
})
export class AssigneeModule { }
