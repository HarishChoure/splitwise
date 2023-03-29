import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';



@NgModule({
  declarations: [
    AddEditExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExpenseModule { }
