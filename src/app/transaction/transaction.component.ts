import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  //Demo data for the transaction list
  constructor(private router:Router){}
  transactions = [
    { amount: 50, payer: 'John', payee: 'Mary', group: 'Food' },
    { amount: 25, payer: 'Mary', payee: 'Bob', group: 'Rent' },
    { amount: 10, payer: 'Bob', payee: 'John', group: null },
    { amount: 30, payer: 'John', payee: 'Mary', group: 'Food' },
    { amount: 15, payer: 'Mary', payee: 'Bob', group: 'Rent' }
  ];
  //This function used to navigate dashboard
  navigateDashboard(){
    this.router.navigateByUrl('dashboard')
  }
}
