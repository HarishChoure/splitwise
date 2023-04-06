import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'splitwise_project';
  constructor(private router : Router){}
  //By this function user can navigate to login page
  navigateLogin(){
    this.router.navigateByUrl('user/login')
  }
  //By this function user can navigate to signup page
  navigateSignup(){
    this.router.navigateByUrl('user/register')
  }
}
