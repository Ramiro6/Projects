import { Component } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _token:Angular2TokenService) {
    this._token.init({
      registerAccountPath: 'http://localhost:3000/auth'
    });
  }
}
