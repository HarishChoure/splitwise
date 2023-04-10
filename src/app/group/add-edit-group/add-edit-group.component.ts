import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit {
  groupForm!: FormGroup;
  members!: FormArray;

  constructor(private formBuilder: FormBuilder, private router :Router) { }

  ngOnInit(): void {
    this.groupForm = this.formBuilder.group({
      groupName: ['', Validators.required],
      groupType: ['', Validators.required],
      members: this.formBuilder.array([
        this.createMember()
      ]),
      settleUpPayment: [false]
    });
    this.members = this.groupForm.get('members') as FormArray;
  }

  // Create member form
  createMember(): FormGroup {
    return this.formBuilder.group({
      memberName: ['', Validators.required],
      memberEmail: ['', [Validators.required, Validators.email]]
    });
  }

  // Add member
  addMember() {
    this.members.push(this.createMember());
  }

  // Delete member
  deleteMember(index: number): void {
    this.members.removeAt(index);
  }

  // Save group
  save() {
    console.log(this.groupForm.value);
    // Implement the save functionality here
  }

  // Invite friend
  invite() {
    console.log('Invite friend functionality');
    // Implement the invite friend functionality here
  }

  navigateToDashboard() {
    this.router.navigateByUrl('dashboard');
  }
}
