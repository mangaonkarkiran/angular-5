import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {CustomerService} from '../customer-list/customer-service'
import {Customer} from '../customer-list/customer-model';

import { PagerService } from '../../services/pager-service';
// import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../authentication/services/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService,PagerService]
})
export class CustomerListComponent implements OnInit {

  allCustomer : Customer[];
  statusCode: number;
  createCustomerLabel: String;
 
  private allItems: any[];
  pager: any = {};
  
  loggedInUser: boolean;

  //constructor(private customerService : CustomerService, private pagerService: PagerService, private toastr: ToastrService) {}
  constructor(private customerService : CustomerService, private pagerService: PagerService,private authService: AuthService) {}

  ngOnInit() {
    //this.loggedInUser = this.authService.isUserLoggedIn();
    
    this.getAllCustomers();
  }
 
 
  customerForm  = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  //Fetch all customer
  getAllCustomers() {
    this.customerService.getAllCustomers()
                       .subscribe(data =>{
                             this.allCustomer = data,
                             this.allItems = data;
                             this.setPage(1)
                       },
                       errorCode =>  this.statusCode = errorCode
                      );   
    }   
    
   // Create
   onCustomerFormSubmit() {
      let customerFrmValue = this.customerForm.value;
      if(this.createCustomerLabel == "update"){
         this.customerService.updateCustomer(customerFrmValue)
                             .subscribe( successCode =>{
                                 this.getAllCustomers();
                             },
                             errorCode => this.statusCode = errorCode);
          this.customerForm.reset();
          this.createCustomerLabel = null;
         // this.toastr.success('record updated successfully','');
      }
      else
      {
        this.customerService.createCustomer(customerFrmValue)
                            .subscribe(successCode => {
                              this.statusCode = successCode;
                              this.getAllCustomers();	
                            },
                            errorCode => this.statusCode = errorCode
                            );
        this.customerForm.reset();
       // this.toastr.success('record saved successfully','');
      }
   }

    //Delete 
      deleteCustomer(customerId: string) {
          this.customerService.deleteCustomer(customerId)
            .subscribe(successCode => {
            this.getAllCustomers();	
          },
          errorCode => this.statusCode = errorCode);    
      }

     //Edit
     editCustomer(customerId: string) {
           this.customerService.getCustomerById(customerId)
                .subscribe(response => {
                      this.createCustomerLabel = "update";
                      this.customerForm.patchValue(response,{onlySelf:true})
                },
                 errorCode =>  this.statusCode = errorCode);   
      }

    // Pagination
    setPage(page: number) {
      this.pager = this.pagerService.getPager(this.allItems.length, page);
      this.allCustomer = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }  

}
