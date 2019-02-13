import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
	<div [ngClass] = "'parent-container'">	
	  <router-outlet></router-outlet>	
	</div>
  `,
  styleUrls: [
    '../../node_modules/primeicons/primeicons.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/primeng/resources/themes/nova-light/theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent { 
}
    