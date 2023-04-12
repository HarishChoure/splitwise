
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private router: Router) {}

  //Demo data
  total_balance: number = 5000;
  you_owe: number = 2000;
  your_owe: number = 400;

  //This method used to navigate invite friend page
  navigateInviteFriend() {
    this.router.navigateByUrl('friend/friend-add');
  }
  //This method used to navigate friend list page
  navigateFriendList() {
    this.router.navigateByUrl('friend/friend-list');
  }
  //This method used to navigate Create group page
  navigateCreateGroup() {
    this.router.navigateByUrl('group/group-add');
  }
  //This method used to navigate Create group List
  navigateGroupList() {
    this.router.navigateByUrl('group/group-list');
  }
  //This method used to navigate dashboard
  navigateDashboard() {
    this.router.navigateByUrl('dashboard');
  }
  //Navigate to settle up page
  navigateSettleup() {
    this.router.navigateByUrl('settle');
  }
  //navigate to expense page add
  navigateExpense() {
    this.router.navigateByUrl('expense/expense-add');
  }
  //Navigate to expense list
  navigateExpenseList() {
    this.router.navigateByUrl('expense/expense-list');
  }
 //Thsi all are menu
  menus = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Invite Friend', route: 'friend/friend-add' },
    { name: 'Friend List', route: 'friend/friend-list' },
    { name: 'Create Group', route: 'group/group-add' },
    { name: 'Group List', route: 'group/group-list' },
    { name: 'Expense List', route: 'expense/expense-list' },
  ];
// Navigat rout function
  navigate(route: string) {
    this.router.navigateByUrl(route);
  }
  //Navigate to transaction page
  navigateTransaction(){
    this.router.navigateByUrl('transaction');
  }
}
