import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router : Router){}
  //This method used to navigate invite friend page
  navigateInviteFriend(){
    this.router.navigateByUrl('friend/friend-add-edit')
  }
  //This method used to navigate friend list page
  navigateFriendList(){
    this.router.navigateByUrl('friend/friend-list')
  }
  
}