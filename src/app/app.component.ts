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
  navigateLogin(){
    this.router.navigateByUrl('user/login')
  }
  navigateSignup(){
    this.router.navigateByUrl('user/register')
  }
}
