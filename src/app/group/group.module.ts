import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';

import { RouterModule,Routes } from '@angular/router';

const groupRoutes : Routes = [
  {path:'gList', component :GroupListComponent},
  {path:'gAddEdit', component :AddEditGroupComponent}
]

@NgModule({
  declarations: [
    GroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(groupRoutes)
  ]
})
export class GroupModule { }
