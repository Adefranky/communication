import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
authServiceService: AuthServiceService;
getusers(): any {
  throw new Error('Method not implemented.');
}
constructor(private authService: AuthServiceService) {
  this.authServiceService = authService;
}

  }
