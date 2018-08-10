import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router'
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      
      
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

    onLoginSubmit(){
     // alert(this.user.email+' '+this.user.password);
      // if(this.user.email=="shravan@gmail.com" && this.user.password=="Mypassword")
      // {
      //  // alert(" Successfully logged in");
      //  window.location.href = '/conc-card';
      // }
      // else
      // {
      //   alert("invalid login");
      // }
      let username : String;
      let password : String;
      let flag : Number;
      flag=0;
      username = this.user.email;
      password = this.user.password;
      this.userService.authenticateUser(username,password)
			.subscribe(response => {
				for(let user of response.data){
          // console.log(user.username);
          // console.log(user.password);
					// if(this.user.email == user.username && 
					// 		this.user.password ==user.password){
					// 	alert("Authenticated User!!");
          //   //window.location.href = '/conc-card'; 
          //   this.router.navigate(['conc-card']);
          //   break;
					// }else{
					// 	alert("User NOT Authenticated!!")
          // }
          
          
          if(this.user.email== user.username){
            if(this.user.password == user.password)
            {
              
              this.router.navigate(['home']);
              flag=1;
              break;
            }
            else{
              alert("Invalid password");
              break;
            }
          }
          else{
            alert("Invalid user");
            break;
          }
         
				}
      });
      
    }

}
