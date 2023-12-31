import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup = this._fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private _fb: FormBuilder){}

  public forgetPassword(){
    console.log("Forget Password.")
  }

  public login() {
    console.log("Login");
    console.log(this.loginForm.value);
  }
}
