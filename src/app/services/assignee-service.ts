import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {TreeNode} from '../model/assignee-model';
import {AssigneeDetails} from '../model/assignee-details-model';
import { AssigneeDetailsAccount } from '../model/assignee-details-account-model';

@Injectable()
export class AssigneeService {

    baseUrl = "http://localhost:3000/";
    assigneeUrl = this.baseUrl + "data";
    assigneedetails = this.baseUrl + "assigneedetails";
    assigneeDetailsAccount = this.baseUrl + "assigneeAccount";

    constructor(private http: Http) {}

    getAssigneeList() : Observable <TreeNode[]>{
        return this.http.get(this.assigneeUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getAssigneeDetails() : Observable <AssigneeDetails[]>{
        return this.http.get(this.assigneedetails)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getAssigneeDetailsAccount() : Observable <AssigneeDetailsAccount[]>{
        return this.http.get(this.assigneeDetailsAccount)
                        .map(this.extractData)
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