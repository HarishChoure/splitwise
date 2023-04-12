import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  constructor(private router :Router){}
//Demo data for the lsit it can be deleted during time of implementation
  expenses = [
    { name: 'Dinner with friends', paidBy: 'John', lentOrBorrowed: 'Borrowed' },
    { name: 'Groceries', paidBy: 'Mary', lentOrBorrowed: 'Lent' },
    { name: 'Movie tickets', paidBy: 'Mike', lentOrBorrowed: 'Borrowed' },
    { name: 'Gasoline', paidBy: 'Jane', lentOrBorrowed: 'Lent' },
    { name: 'Gift for coworker', paidBy: 'Mark', lentOrBorrowed: 'Borrowed' },
  ];
  editExpense(){
    this.router.navigateByUrl('expense/expense-edit')
  }
}
