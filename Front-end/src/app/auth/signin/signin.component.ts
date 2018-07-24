import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignIn(user: User) {
    this.authService.signInUser(user);
  }
}
