import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settle-up-page',
  templateUrl: './settle-up-page.component.html',
  styleUrls: ['./settle-up-page.component.scss']
})
export class SettleUpPageComponent {
  settleUpForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router :Router) { }

  ngOnInit() {
    this.settleUpForm = this.formBuilder.group({
      payer: ['',Validators.required],
      reciver:['',Validators.required],
      amount: ['', Validators.required],
      paymentOption: ['', Validators.required],
      description: ['']
    });
  }
// Submit button are used to navigate to dashboard
  onSubmit() {
    this.router.navigateByUrl('dashboard')
  }
//Cancel button used to navigate to dashboard
  onCancel() {
    this.router.navigateByUrl('dashboard')
  }
}
