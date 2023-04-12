import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  login() {
    console.log("Email: ", this.email);
    console.log("Password: ", this.password);
  }
  constructor(private router: Router) {}
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
