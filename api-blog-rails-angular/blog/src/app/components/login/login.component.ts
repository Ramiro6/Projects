import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  claves:any = {
    email: "",
    password: ""
  }

  constructor(private _toke:Angular2TokenService) {
    this._toke.init({
      signIn: 'http://localhost:3000/auth'
    })
  }

  ngOnInit() {
  }

  signUp(forma:NgForm){
    return this._toke.signIn({
        email: this.claves.email,
        password: this.claves.password,
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    ),
    console.log(this.claves)
  }

}
