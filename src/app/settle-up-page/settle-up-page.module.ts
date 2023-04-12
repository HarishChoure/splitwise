import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettleUpPageComponent } from './settle-up-page.component'; 
import { RouterModule,Routes } from '@angular/router';

const settleRoutes : Routes = [
  {path:'', component :SettleUpPageComponent},
 
]
@NgModule({
  declarations: [
    SettleUpPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(settleRoutes)
  ]
})
export class SettleUpPageModule { }
