import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Account } from '../model/account-model';
import { SupplierType } from '../model/supplier-type-model';
import { Country } from '../model/country-model';
import {Supplier } from '../model/supplier-model';

@Injectable()
export class SupplierService {
   
    //URL for CRUD operations
    baseUrl = "http://localhost:3000/";

    accountUrl = this.baseUrl + "account";
    supplierTypeUrl = this.baseUrl + "supplierType";
    countryUrl = this.baseUrl + "country";
    supplierUrl = this.baseUrl + "supplier";

    //Create constructor to get Http instance
    constructor(private http:Http) { }
   
    getAccount() : Observable <Account[]>{
        return this.http.get(this.accountUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    
    getSupplierType() : Observable <SupplierType[]>{
        return this.http.get(this.supplierTypeUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getCountry() : Observable <Country[]>{
        return this.http.get(this.countryUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getAllSupplier(): Observable<Supplier[]> {
        return this.http.get(this.supplierUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
      }


    //Save Supplier
    saveSupplier(supplier : Supplier): Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.supplierUrl,supplier,options)
                        .map(success => success.status)
                        .catch(this.handleError);
    }

    // Update
    updateSupplier(supplier: Supplier) : Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.supplierUrl +"/"+ supplier.id,supplier,options)
                        .map(success => success.status)
                        .catch(this.handleError);
    }

    // Edit
    getEditById(supplierId: number): Observable<Supplier> {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
      
        return this.http.get(this.supplierUrl +"/"+ supplierId)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    deleteSupplier(supplierId : string) : Observable<number>{
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });

        return this.http.delete(this.supplierUrl +"/"+ supplierId)
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