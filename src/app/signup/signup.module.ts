// signup.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule] // Export RouterModule if needed for child components
})
export class SignupModule { }
