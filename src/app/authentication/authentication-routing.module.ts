import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from '../header/header.component';
import { DividerComponent } from './divider/divider.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
 {path: 'signup', component: SignupComponent },
 {path: 'header', component: HeaderComponent },
 {path: 'Divider', component: DividerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
