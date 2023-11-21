import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CreateUserInterface } from 'src/interfaces/user-interface';
import { UserService } from 'src/services/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm: FormGroup = this._fb.group({
    fname:["", Validators.required],
    lname: ["", Validators.required],
    phoneNumber: ["", Validators.required],
    email: ["", Validators.required,],
    password: ["", [Validators.required, Validators.minLength(8)]],
    rePassword: ["", [Validators.required, Validators.minLength(8)]]
  });
  private $createUser: BehaviorSubject<boolean> = this._createUserService.$createUserData;

  constructor(private _fb: FormBuilder, private _createUserService: UserService, private _router: Router){}

  ngOnInit() {
    this.$createUser.subscribe( res => {
      if(res){
        this._router.navigateByUrl("/profile");
      }
      else{
        // this._router.navigateByUrl("/")
      }
    });
  }

  public signup() {
    console.log("SIgn UP");
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    if(this.registerForm.valid){
      const userData: CreateUserInterface = this.registerForm.value;
      this._createUserService.createUser(userData);
    }
  }
}
