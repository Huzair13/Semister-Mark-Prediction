import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name!: string;
  email!: string;
  password!: string;
  role!: string;

  constructor(private router: Router) {}
  goToLogin() {
    this.router.navigate(['/login']);
  }
  register() {
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    console.log("Password: " + this.password);
    console.log("Role: " + this.role);
  }
}
