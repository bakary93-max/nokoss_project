import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  user: User = {
    firstname: "",
    lastname : "",
    email : "",
    password : "",
    passwordConfirm: "",
  }
  signupForm: FormGroup;

  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm : FormControl;


  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("",[Validators.required])
    this.lastname = fb.control("",[Validators.required])
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("",[Validators.required, Validators.minLength(8)])
    this.passwordConfirm = fb.control("",[Validators.required, Validators.minLength(8)])

    this.signupForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    })
  }

  ngOnInit(): void {
  }
  handleSubmit(){

  }


}
