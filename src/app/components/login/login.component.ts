import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private location: Location) {}

  login(islogged:boolean) {
    if(islogged) {
      this.authService.login;
    } else {
      this.authService.logout
    }
  }

  goBack(): void {
    this.location.back();
  }

  goPrivateZone() : void {
    this.location.go('/private');
  }
}
