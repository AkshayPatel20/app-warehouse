import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = 'App Warehouse';
  public href = [];

  constructor(public authService: AuthServiceService, private router: Router) { }

  ngOnInit() {

    // Setting Navbar Header Base on Url
    this.href = this.router.url.split('/');
    if(this.href[1] == '') {
      this.appTitle = 'App Warehouse';
    } else {
      this.appTitle = this.href[1].charAt(0).toUpperCase() + this.href[1].slice(1);
    }

  }// close nginit

  onLogout() {
    this.authService.logout();
  }

}
