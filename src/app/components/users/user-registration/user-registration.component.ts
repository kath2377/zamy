import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user-service/user.service';
import { AuthService } from '../../../services/firebase-services/auth.service';
import { AppSettings } from '../../../app.settings';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.user = new User(null, null, null, 0, null, null, null, null, null);
  }

  registerUserApplication(): void {
    this.user.password = this.encrypt(this.user.password);
    this.userService.save(this.user.id, this.user);
    console.log('Se registro la solicitud del usuario');
  }

  encrypt(text: string): string {
    return text + '.';
  }

}
