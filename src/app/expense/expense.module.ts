import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditExpenseComponent } from './add-edit-expense/add-edit-expense.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const expenseRoutes : Routes = [
  {path:'expense-list', component :ExpenseListComponent},
  {path:'expense-add', component :AddEditExpenseComponent},
  {path:'expense-edit', component :AddEditExpenseComponent}
]

@NgModule({
  declarations: [
    AddEditExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(expenseRoutes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExpenseModule { }
