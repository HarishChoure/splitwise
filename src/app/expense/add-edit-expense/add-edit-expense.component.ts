import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.scss']
})
export class AddEditExpenseComponent {
  //Expense form 
  expenseForm!: FormGroup;
  //Dummy participants
  participants = ['Alice', 'Bob', 'Charlie', 'David'];

constructor(private formBuilder: FormBuilder,private router : Router) { }

ngOnInit(): void {
this.expenseForm = this.formBuilder.group({
name: ['', Validators.required],
amount: ['', Validators.required],
currency: ['USD'],
date: ['', Validators.required],
notes: [''],
group: [''],
paidBy: [this.participants[0]],
participants: [[this.participants[0]]],
split: ['amount']
});
}

currencies = [
  { value: 'USD', label: 'US Dollar' },
  { value: 'EUR', label: 'Euro' },
  { value: 'GBP', label: 'British Pound' },
];
//This function navigate to dashboard
navigateDashboard(){
  this.router.navigateByUrl('dashboard')
}
}
