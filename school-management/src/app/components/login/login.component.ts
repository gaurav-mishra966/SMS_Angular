import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  private authService = inject(AuthService);

  login() {
    // Perform login logic (for simplicity, we'll skip validation and assume success)
    if (this.username && this.password) {
      this.authService.login();
    } else {
      alert('Please enter valid credentials');
    }
  }
}
