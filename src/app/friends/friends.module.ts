import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditFriendsComponent } from './add-edit-friends/add-edit-friends.component';
import { FriendListComponent } from './friend-list/friend-list.component';


import { RouterModule,Routes } from '@angular/router';

const friendsRoutes : Routes = [
  {path:'fList', component :FriendListComponent},
  {path:'fAddEdit', component :AddEditFriendsComponent}
]
@NgModule({
  declarations: [
    AddEditFriendsComponent,
    FriendListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(friendsRoutes)
  ]
})
export class FriendsModule { }
