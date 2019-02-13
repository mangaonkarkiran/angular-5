import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { User } from './services/user';

@Component({
   selector: 'logout',	
   template: `Logged In : {{loggedInUser.username }} 
     <button type="button" class="btn btn-link" (click)="logout()"> Logout</button>
     `
})
export class LogoutComponent { 
	loggedInUser: string;
    constructor(private authService: AuthService, private router: Router) {
	}
    ngOnInit() {
       this.loggedInUser = localStorage.getItem('username');
    }		
	logout() {
	   this.authService.logoutUser();
       this.router.navigate([ this.authService.getLoginUrl() ]);	
	}
}
    