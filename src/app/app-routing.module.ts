import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './authentication/services/auth-guard.service';
import { DashboardLayoutComponent }  from './layout/dashboard.layout.component';

const routes: Routes = [
	{
	   path: '',
	   redirectTo: '/customers',
	   pathMatch: 'full'
	},
	{
	   path: '',
	   component: DashboardLayoutComponent,
	   canActivate: [ AuthGuardService ],
	   children: [
		  {
			  path: 'assignees',
		  	  loadChildren: './assignee/assignee.module#AssigneeModule'
		  },
		  {
			  path: 'customers',
		  	  loadChildren: './customers/customers.module#CustomersModule'
			},
			{
				path: 'suppliers',
				loadChildren: './supplier/supplier.module#SupplierModule'
			}
	   ]		
	},
	{
	   path: 'login',
       loadChildren: './authentication/auth.module#AuthModule'
	}
];

@NgModule({
  imports: [ 
          RouterModule.forRoot(routes) 
  ],
  exports: [ 
          RouterModule 
  ]
})
export class AppRoutingModule{ } 