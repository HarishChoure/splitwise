import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-friends',
  templateUrl: './add-edit-friends.component.html',
  styleUrls: ['./add-edit-friends.component.scss']
})
export class AddEditFriendsComponent {
  constructor(private router : Router){}
  //Inviter form desing
  inviteForm!: FormGroup;
  ngOnInit(): void {
    this.inviteForm = new FormGroup({
      invite_name: new FormControl('',Validators.required),
      invite_email: new FormControl('',Validators.required),
      discription: new FormControl(),
    })
  }
  //By this function user can navigate to dashboard
  navigateDashboard(){
    this.router.navigateByUrl('dashboard')
    console.log(this.inviteForm)
  }
}
