<<<<<<< HEAD
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-demo';
}
=======
import {Component} from '@angular/core';

@Component({
selector: 'app-root',
template:`<nav class='navbar navbar-expand navbar-light bg-light'>
<a class='navbar-brand'>{{pageTitle}}</a>
<ul class='nav nav-pills'>
  <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/welcome']">Home</a></li>
  <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/products']">Product List</a></li>
</ul>
</nav>
<br>
<div class='container-fluid'>
<router-outlet></router-outlet>
</div>`




})

export class AppComponent
{
  pageTitle=" Product Management";


}
>>>>>>> 73daed338854e25ba0a727ab533bfc020bef20d2
