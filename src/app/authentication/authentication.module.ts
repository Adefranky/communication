import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'; 
import { SignupComponent } from './signup/signup.component';
import { DividerComponent } from './divider/divider.component';





@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    DividerComponent
    
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    
  ]
})
export class AuthenticationModule { }
