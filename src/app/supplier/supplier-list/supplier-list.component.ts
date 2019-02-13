import { Component, OnInit } from '@angular/core';

import { SupplierService } from '../../services/supplier-details-service'
import { Supplier } from '../../model/supplier-model';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css'],
  providers : [SupplierService]
})
export class SupplierListComponent implements OnInit {

  allSupplier : Supplier[];
  errorCode : string;
  statusCode: number;
  
  constructor(private supplierService : SupplierService) { }

  ngOnInit() {
    this.getAllSupplier();
  }

  getAllSupplier() {
    this.supplierService.getAllSupplier()
                  .subscribe(data =>{
                        this.allSupplier = data
                  },
                  errorCode =>  this.errorCode = errorCode
                 );   
    }
    
    deleteSupplier(supplierId: string) {
      this.supplierService.deleteSupplier(supplierId)
      .subscribe(successCode => {
          this.getAllSupplier();	
       },
      errorCode => this.statusCode = errorCode);    
   }

   
  }