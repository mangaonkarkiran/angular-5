import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// All Component to be loaded
import { SupplierComponent } from '../supplier/supplier-component'
import { SupplierDetailsComponent} from '../supplier/supplier-details/supplier-details.component';
import { SupplierListComponent} from '../supplier/supplier-list/supplier-list.component';

import { AuthGuardService } from '../authentication/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children: [ 
	    {
		    path: 'supplierDetails',
		    component: SupplierDetailsComponent
      },
      {
		    path: 'supplierList',
		    component: SupplierListComponent
      },
      {
        path: 'supplierDetails/:id',
        component: SupplierDetailsComponent
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
