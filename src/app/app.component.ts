import { Component } from '@angular/core';
import {User} from './Entities/user';
import {AuthenticationService} from './Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isLogged() {
    return this.currentUser != null;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
