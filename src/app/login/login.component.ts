import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  login() {
    // Here, you can add authentication logic to validate the username and password.
    // You can make an HTTP request to an API or perform any other authentication mechanism.

    // If the authentication is successful, navigate to the dashboard page.
    // Replace 'dashboard' with the actual route/path of your dashboard component.
    this.router.navigate(['/dashboard']);
  }
}
