import { Component, OnInit } from '@angular/core';

import { AssigneeService} from '../../services/assignee-service'
import { TreeNode } from 'primeng/primeng';

@Component({
  selector: 'app-assignee-list',
  templateUrl: './assignee-list.component.html',
  styleUrls: ['./assignee-list.component.css'],
  providers: [AssigneeService]
})
export class AssigneeListComponent implements OnInit {

  treeNode: TreeNode[];
  errorCode : string;

  constructor(private nodeService: AssigneeService) {}
  
  ngOnInit() 
  {
     this.nodeService.getAssigneeList()
                          .subscribe(data =>{
                               this.treeNode = data
                          },
                           errorCode =>  this.errorCode = errorCode
                          );   
      
  }


}
