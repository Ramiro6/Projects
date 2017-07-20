import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private _token:Angular2TokenService) { }

  ngOnInit() {
  }

  signUp(){
    return this._token.registerAccount({
        email:                'example@example.org',
        password:             'secretPassword',
        passwordConfirmation: 'secretPassword'
    }).subscribe(
        res =>      console.log(res),
        error =>    console.log(error)
    );
  }

}
