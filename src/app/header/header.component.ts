import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  users: any;
  AuthServiceService: AuthServiceService | undefined;

  constructor(private authService: AuthServiceService) {}

  ngOnInit(): void {
    this.users = this.authService.getusers();
  }
}
