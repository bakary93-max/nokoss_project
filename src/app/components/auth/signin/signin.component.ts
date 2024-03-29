import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: User = {
    email : "",
    password : "",
  }

  signinForm: FormGroup;

  email: FormControl;
  password: FormControl;


  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("",[Validators.required, Validators.minLength(8)])

    this.signinForm = fb.group({
      email: this.email,
      password: this.password,
    })
  }

  ngOnInit(): void {
  }
  handleSubmit(){
    console.log(this.signinForm.valid)

  }

}
