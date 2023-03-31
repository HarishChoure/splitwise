import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';

import { RouterModule,Routes } from '@angular/router';

const expenseRoutes : Routes = [
  {path:'eList', component :ExpenseListComponent},
  {path:'eAddEdit', component :AddEditExpenseComponent}
]

@NgModule({
  declarations: [
    AddEditExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(expenseRoutes)
  ]
})
export class ExpenseModule { }
