import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent {
  constructor(private router: Router) { }
//Demo group name
  group_names = ['Rent', 'Varndavan', 'Party'];

  member_name!: string;
  transaction!: string;
  expense!: string;
  selected_group_name !:string;
//Switch group details to list  variable
  group_list: boolean = true;
  group_details: boolean = false;
//Group details array
  group_detail = [
    { member_name: 'Harry', transaction: 'Paid to carry', expense: 'Rent' },
    { member_name: 'Berry', transaction: 'Paid to Harry', expense: 'Trip' },
    { member_name: 'Perry', transaction: 'Paid to Sherry', expense: 'Party' }
  ];

  //This method used to delete group
  deleteName(index: number) {
    this.group_names.splice(index, 1);
  }

  
//This method used to navigate user from group list to group details
  navigateGroupDetails(index:number) {
    this.group_details = true;
    this.group_list = false;
    this.router.navigateByUrl('group/group-details');
    this.selected_group_name = this.group_names[index];
  }
//This method used to navigate user from group details to group list
  navigateGroupList() {
    this.group_details = false;
    this.group_list = true;
    this.router.navigateByUrl('group/group-list');
  }

}
