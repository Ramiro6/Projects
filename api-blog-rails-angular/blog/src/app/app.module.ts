import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// apitoken
import { Angular2TokenService } from 'angular2-token';

// routes
import { app_routing } from './app.routes'

import { AppComponent } from './app.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewuserComponent } from './components/newuser/newuser.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    HomeComponent,
    NavbarComponent,
    NewuserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
