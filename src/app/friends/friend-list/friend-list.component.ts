import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
constructor(private router : Router){}
//Demo data this data will be deleted at the time of implementation and method also modify
names = ['Ram', 'Krishna', 'Shyam', 'Radha','Harish choure'];
//This method used to delete user
deleteName(index: number) {
  this.names.splice(index, 1);
}
//This method are used to navigate edit-friend list
navigateEditFriend(){
  this.router.navigateByUrl('friend/friend-add-edit')
}

}
