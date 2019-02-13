import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// All Component to be loaded
import { AssigneeComponent } from '../assignee/assignee-component'
import { AssigneeListComponent } from './assignee-list/assignee-list.component';
import { AssigneeDetailsComponent } from './assignee-details/assignee-details.component';

import { AuthGuardService } from '../authentication/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AssigneeComponent,
    children: [ 
	    {
		    path: 'assigneeDetails',
		    component: AssigneeDetailsComponent
      },
      {
		    path: 'treetable',
		    component: AssigneeListComponent
      }  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssigneeRoutingModule { }
