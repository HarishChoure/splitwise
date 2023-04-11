import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditFriendsComponent } from './add-edit-friends/add-edit-friends.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';


const friendsRoutes : Routes = [
  {path:'friend-list', component :FriendListComponent},
  {path:'friend-add', component :AddEditFriendsComponent},
  {path:'friend-edit', component :AddEditFriendsComponent}
]
@NgModule({
  declarations: [
    AddEditFriendsComponent,
    FriendListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(friendsRoutes),
    ReactiveFormsModule

  ]
})
export class FriendsModule { }
