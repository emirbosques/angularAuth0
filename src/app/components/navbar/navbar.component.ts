import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public serviceAuth: AuthService) { 

    this.serviceAuth.handleAuthentication();

  }

  ngOnInit() {
  }

  login() {
    this.serviceAuth.login();
  }

  logout(){
    this.serviceAuth.logout();
  }

}
