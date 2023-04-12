import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  //Demo data for the transaction list
  transactions = [
    { amount: 50, payer: 'John', payee: 'Mary', group: 'Food' },
    { amount: 25, payer: 'Mary', payee: 'Bob', group: 'Rent' },
    { amount: 10, payer: 'Bob', payee: 'John', group: null },
    { amount: 30, payer: 'John', payee: 'Mary', group: 'Food' },
    { amount: 15, payer: 'Mary', payee: 'Bob', group: 'Rent' }
  ];
}
