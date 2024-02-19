import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    pfNumber: '',
    password: '',
    confirmpassword: ''
  };

  onSubmit() {
  
    console.log('Form submitted:', this.user);
  }
}
