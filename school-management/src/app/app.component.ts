import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SchoolServiceService } from './services/school-service.service';
import { Students } from './models/students';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { CalendarComponent } from './components/calendar/calendar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LoginComponent,
    RouterModule,
    CalendarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  [x: string]: any;
  title = 'school-management';

  searchTerm: string = '';
  students: Students[] = [];
  filteredStudents: Students[] = []; // This will store the filtered students
  isLoggedIn: boolean = false;
  isDarkMode = false;

  // Dependency injections
  private schoolService = inject(SchoolServiceService);
  private authService = inject(AuthService);
  private themeService = inject(ThemeService);

  constructor(private router: Router) {
    this.isDarkMode = this.themeService.getTheme() === 'dark';
  }

  ngOnInit(): void {
    // Fetch student data when component initializes
    this.schoolService.getStudents().subscribe((data) => {
      this.students = data;
      this.filteredStudents = data; // Initialize the filtered list with all students
    });

    // Subscribe to the logged-in state
    this.authService.loggedIn$.subscribe((loggedInStatus) => {
      console.log('Logged in status:', loggedInStatus);
      this.isLoggedIn = loggedInStatus;
    });
  }

  searchStudents(): void {
    console.log('Search term:', this.searchTerm);
    // Filter the students based on the search term
    this.filteredStudents = this.students.filter((student) =>
      student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getTheme() === 'dark'; // Update current theme status
  }

  logout(): void {
    this.authService.logout();
  }
}
