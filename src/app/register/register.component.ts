import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      
      'name':[this.user.name,[
        Validators.required
      ]],
      'email':[this.user.email,[
        Validators.required,
        Validators.email
      ]],
      'password':[this.user.password,
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]

    });

  }

    onRegisterSubmit(){
      alert(this.user.name+' '+this.user.email+' '+this.user.password);
    }
}
