import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router : Router){}
  registerForm!: FormGroup;
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      user_name : new FormControl('',Validators.required),
      user_email: new FormControl('',Validators.required),
      user_psw: new FormControl('',Validators.required),
    })
  }
  //By this function user can navigate to dashboard
  navigateDashboard(){
    this.router.navigateByUrl('dashboard')
  }
}
