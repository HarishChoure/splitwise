import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionComponent } from './transaction.component';

import { RouterModule, Routes } from '@angular/router';

const transactions : Routes = [
  {path:'', component :TransactionComponent},
];

@NgModule({
  declarations: [
    TransactionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(transactions),
  ]
})
export class TransactionModule { }
