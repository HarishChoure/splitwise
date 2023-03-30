import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';



@NgModule({
  declarations: [
    GroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GroupModule { }
