import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  usuario:Admin = ({
    email: "",
    password: "",
    rpassword: "",
  })

  // usuario:Object = {}

  constructor(private _token:Angular2TokenService) { }

  ngOnInit() {
  }

  signUp(forma:NgForm){
    return this._token.registerAccount({
        email: this.usuario.email,
        password: this.usuario.password,
        passwordConfirmation: this.usuario.rpassword
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

  guardar(forma:NgForm){
    console.log(this.usuario)
  }

}

export interface Admin {
  email:string;
  password:string;
  rpassword:string;
}
