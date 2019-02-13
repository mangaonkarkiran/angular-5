import { Component, OnInit } from '@angular/core';

import { AssigneeService } from '../../services/assignee-service'
import { AssigneeDetails } from '../../model/assignee-details-model'
import { AssigneeDetailsAccount } from '../../model/assignee-details-account-model'

@Component({
  selector: 'app-assignee-details',
  templateUrl: './assignee-details.component.html',
  styleUrls: ['./assignee-details.component.css'],
  providers:[AssigneeService]
})
export class AssigneeDetailsComponent implements OnInit {

  allAssigneeDetails :  AssigneeDetails[];
  allAssigneeDetailsAccount : AssigneeDetailsAccount[];
  errorCode :string;

  constructor(private assigneeService: AssigneeService) { }

  ngOnInit() {
    this.getAllAssigneeService()
  }

  getAllAssigneeService() {
    this.assigneeService.getAssigneeDetails()
                  .subscribe(data =>{
                        this.allAssigneeDetails = data
                  },
                        errorCode =>  this.errorCode = errorCode
                 );   
    }

  onSelect(idAssignee) {
    console.log(idAssignee)
    // this.allAssigneeDetailsAccount = this.assigneeService.getAssigneeDetailsAccount()
    //              .filter((item)=> item.idAssignee == idAssignee);
    
  }

}
