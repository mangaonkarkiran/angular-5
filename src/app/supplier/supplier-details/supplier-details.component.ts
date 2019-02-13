import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SupplierService } from '../../services/supplier-details-service'

import { Account } from '../../model/account-model'
import { SupplierType } from '../../model/supplier-type-model'
import { Country } from '../../model/country-model';
import { Supplier } from '../../model/supplier-model';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css'],
  providers : [SupplierService]
})
export class SupplierDetailsComponent implements OnInit {

  allAccount :  Account [];
  allSupplierType : SupplierType [];
  allCountry : Country[];
  allpaymentType = ["Cheque","BACS","Overseas Transfer"];
  allpaymentTerms = ["Payment due in 7 days","Payment due in 14 days","Payment due in 30 days","Payment due in 14 days immediately"];
  allsupplierDescriptionType = ["Invoice Ref","Expense Date","Invoice Date"]
  alldefaultGLCode = ["Bank interests","Bank Charges","Furniture rental"]
  alldefaultVATRate = ["20%","4%","5%","Exempt","Zero"]
  allsupplierRemittance =["Email","Post/Printed","Fax"]
  allstatus = ["Pending","Approved"]

  errorCode : string;
  statusLabel :string;
  statusCode: number;
  supplierId :number = null;
  allSupplier : Supplier[];
  checkNull : null;

  supplierForm  = new FormGroup({
    id: new FormControl('', Validators.required),
    supplierName: new FormControl('', ),
    clientAccount: new FormControl('', ),
    sterlingReference: new FormControl('', ),
    supplierType: new FormControl('', ),
    assignee: new FormControl('', ),
    alternativeReference: new FormControl('', ),
    postalCode: new FormControl('', ),
    country: new FormControl('', ),
    addressLine1: new FormControl('', ),
    addressLine2: new FormControl('', ),
    town: new FormControl('', ),
    state: new FormControl('', ),
    supplierContact: new FormControl('', ),
    telephone: new FormControl('', ),
    fax: new FormControl('', ),
    mobile: new FormControl('', ),
    email: new FormControl('', ),
    currency: new FormControl('', ),
    defaultVATRate: new FormControl('', ),
    VATRegisterNumber: new FormControl('', ),
    defaultGLCode: new FormControl('', ),
    supplierPrefix: new FormControl('', ),
    supplierDescriptionType: new FormControl('', ),
    paymentTerms: new FormControl('', ),
    paymentType: new FormControl('', ),
    accountNumber: new FormControl('', ),
    sortCode: new FormControl('', ),
    supplierRemittance: new FormControl('', ),
    status: new FormControl('', ),
    approvedBy: new FormControl('', ),
    approvedDate: new FormControl('', ),
    suspendedBy: new FormControl('', ),
    suspendedDate: new FormControl('', ),
    rejectedBy: new FormControl('', ),
    rejectedDate: new FormControl('', )
  });

  constructor(
    private supplierService : SupplierService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllAccount();
    this.getSupplierType();
    this.getCountry();
    this.getAllSupplier();
    
    this.supplierId = +this.route.snapshot.params['id'];
    this.selectedById(this.supplierId);
    
  }
  
  selectedById(supplierId : number){
    if (!(Number.isNaN(supplierId))){
       this.editSupplier(supplierId)
    }
  }

  getAllAccount() {
    this.supplierService.getAccount()
                        .subscribe(data =>{
                             this.allAccount = data
                        },
                         errorCode =>  this.errorCode = errorCode
                        );   
    } 
    
   getSupplierType() {
    this.supplierService.getSupplierType()
                         .subscribe(data =>{
                             this.allSupplierType = data
                          },
                          errorCode =>  this.errorCode = errorCode
                         );   
    } 

    getCountry() {
      this.supplierService.getCountry()
                           .subscribe(data =>{
                               this.allCountry = data
                            },
                            errorCode =>  this.errorCode = errorCode
                           );   
      }

    getAllSupplier() {
         this.supplierService.getAllSupplier()
                       .subscribe(data =>{
                             this.allSupplier = data
                       },
                       errorCode =>  this.errorCode = errorCode
                      );   
    }   
 
     //Edit
     editSupplier(supplierId: number) {
      this.supplierService.getEditById(supplierId)
           .subscribe(response => {
                 this.statusLabel = "update";
                 this.supplierForm.patchValue(response,{onlySelf:true})
           },
            errorCode =>  this.statusCode = errorCode);   
     }

    

    // Save
    onSupplierFormSubmit() {
      let supplierFrmValue = this.supplierForm.value;
      if(this.statusLabel == "update"){
        this.supplierService.updateSupplier(supplierFrmValue)
              .subscribe( successCode =>{
                  this.getAllSupplier();
                  this.router.navigate(['/suppliers/supplierList']);
              },
              errorCode => this.statusCode = errorCode);
              this.supplierForm.reset();
              this.statusLabel = null;
      }
      else
      {
        this.supplierService.saveSupplier(supplierFrmValue)
                            .subscribe(successCode => {
                              this.getAllSupplier();
                              this.router.navigate(['/suppliers/supplierList']);	
                            },
                            errorCode => this.errorCode = errorCode
                            );
        this.supplierForm.reset();
      }
   }



}
