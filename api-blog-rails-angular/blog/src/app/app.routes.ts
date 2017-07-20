import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { HomeComponent } from './components/home/home.component';

import { NewuserComponent } from './components/newuser/newuser.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: CreateuserComponent },
  { path: 'newuser', component: NewuserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes);
