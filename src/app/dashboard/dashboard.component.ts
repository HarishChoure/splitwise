
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router : Router){}
  //This function is used to navigate the user to friend invite form page
  navigateInviteFriend(){
    this.router.navigateByUrl('friend/friend-add-edit')
  }
}