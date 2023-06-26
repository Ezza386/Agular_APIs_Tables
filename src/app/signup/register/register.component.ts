import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  repeatPass:string='none';
  ngOnInit(): void{
    console.log('Retrieved users:', this.registerForm);
    this.registerForm;
  }
  registerForm=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.minLength(9),Validators.maxLength(9),Validators.pattern("[0-9]*")]),
    gender: new FormControl("", [Validators.required]), // Add required validator,
    pwd: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    rpwd: new FormControl("")
  });
  registerSubmitted() {
    console.log(this.registerForm.get('firstname'));
    if (this.registerForm.valid) {
      console.log('Submitted');
    } else {
      console.log('Form is invalid');
    }
  } 
  get FirstName(): FormControl {
    return this.registerForm.get("firstname") as FormControl;
  }
  
  get LastName(): FormControl {
    return this.registerForm.get("lastname") as FormControl;
  }
  
  get Email(): FormControl {
    return this.registerForm.get("email") as FormControl;
  }
  
  get Mobile(): FormControl {
    return this.registerForm.get("mobile") as FormControl;
  }
  
  get Gender(): FormControl {
    return this.registerForm.get("gender") as FormControl;
  }
  
  get Password(): FormControl {
    return this.registerForm.get("pwd") as FormControl;
  }
  
  get ResetPassword(): FormControl {
    return this.registerForm.get("rpwd") as FormControl;
  }
  


}

