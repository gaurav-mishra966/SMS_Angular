import { CommonModule, NgFor } from '@angular/common';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Students } from '../../models/students';
import { SchoolServiceService } from '../../services/school-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  students: Students[] = [];
  filteredStudents: Students[] = [];
  searchTerm: string = '';

  private schoolService = inject(SchoolServiceService);
  // Example data for infographics
  genderDistribution = [
    { name: 'Male', value: 60 },
    { name: 'Female', value: 40 },
  ];

  gradeDistribution = [
    { name: 'A', value: 15 },
    { name: 'B', value: 25 },
    { name: 'C', value: 10 },
    { name: 'D', value: 5 },
    { name: 'F', value: 5 },
  ];

  overviewCards = [
    { title: 'Students', value: 120, icon: 'bi-people', bg: 'bg-primary' },
    {
      title: 'Teachers',
      value: 25,
      icon: 'bi-person-badge',
      bg: 'bg-secondary',
    },
    {
      title: 'Buses',
      value: 12,
      icon: 'bi-bus-front',
      bg: 'bg-warning text-dark',
    },
    {
      title: 'Expenses',
      value: '₹4.7L',
      icon: 'bi-cash-coin',
      bg: 'bg-danger',
    },
  ];

  private router = inject(Router);

  ngOnInit(): void {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
      this.router.navigate(['/login']);
    } else {
      this.fetchStudents();
    }
  }

  // Fetch students from the service
  fetchStudents(): void {
    this.schoolService.getStudents().subscribe((data) => {
      this.students = data;
      this.filteredStudents = data; // Set filtered list to all students initially
    });
  }

  // Filter students based on search term
  searchStudents(): void {
    if (!this.searchTerm) {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter((student) =>
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Navigate to student detail page
  viewStudentDetails(studentId: number): void {
    this.router.navigate([`/students/${studentId}`]);
  }

  // Handle adding a new student
  addStudent(): void {
    this.router.navigate(['/students/add']);
  }
}
