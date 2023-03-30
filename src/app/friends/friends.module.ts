import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditFriendsComponent } from './add-edit-friends/add-edit-friends.component';
import { FriendListComponent } from './friend-list/friend-list.component';



@NgModule({
  declarations: [
    AddEditFriendsComponent,
    FriendListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
