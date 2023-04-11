import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';

import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


const groupRoutes : Routes = [
  {path:'group-list', component :GroupListComponent},
  {path:'group-details', component:GroupListComponent},
  {path:'group-add', component :AddEditGroupComponent},
  {path:'group-edit', component :AddEditGroupComponent}
]

@NgModule({
  declarations: [
    GroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(groupRoutes),
    ReactiveFormsModule,
  ]
})
export class GroupModule { }
