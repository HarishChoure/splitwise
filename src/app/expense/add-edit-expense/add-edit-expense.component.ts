import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router ,ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-add-edit-expense',
  templateUrl: './add-edit-expense.component.html',
  styleUrls: ['./add-edit-expense.component.scss']
})
export class AddEditExpenseComponent {
  //Expense form 
  expenseForm!: FormGroup;

constructor(private formBuilder: FormBuilder,private router : Router,private rout:ActivatedRoute) { }
currentUrl !: string;
formHeading !: string ;

ngOnInit(): void {
this.expenseForm = this.formBuilder.group({
descript: ['', Validators.required],
amount: ['', Validators.required],
date: ['', Validators.required],
split: ['amount']
});
}
// Currencies container
currencies = [
  "INR","USD","EURO"
];
//Group
group=[
  "College Group","Tution Group","Trip","Party"
];
//Member
member = ['Priya' ,'Mayank'];
//This function navigate to dashboard
navigateDashboard(){
  this.router.navigateByUrl('dashboard')
}
}
