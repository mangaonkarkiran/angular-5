import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Customer } from './customer-model';

@Injectable()
export class CustomerService {
   
    //URL for CRUD operations
    customerUrl = "http://localhost:3000/customers";
    
    //Create constructor to get Http instance
    constructor(private http:Http) { }
   
    //Fetch all articles
    getAllCustomers(): Observable<Customer[]> {
        return this.http.get(this.customerUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    //Create Customer
    createCustomer(customer : Customer): Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.customerUrl,customer,options)
                        .map(success => success.status)
                        .catch(this.handleError);
    }

    deleteCustomer(customerId : string) : Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.customerUrl +"/"+ customerId)
                        .map(success => success.status)
                        .catch(this.handleError);
    }

    getCustomerById(customerId: string): Observable<Customer> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
      
        return this.http.get(this.customerUrl +"/"+ customerId)
                        .map(this.extractData)
                        .catch(this.handleError);
    }	

    updateCustomer(customer: Customer) : Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.customerUrl +"/"+ customer.id,customer,options)
                        .map(success => success.status)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
            return body;
    }
    
    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }

} 