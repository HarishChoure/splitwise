import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router : Router){}
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      user_email: new FormControl('',Validators.required),
      user_psw: new FormControl('',Validators.required),
    })
  }
  //By this function user can navigate to dashboard
  navigateDashboard(){
    this.router.navigateByUrl('dashboard')
  }
}
