import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SchoolServiceService } from '../../services/school-service.service';
import { Students } from '../../models/students';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  // @Input() students = [];

  // Sample student data
  students = [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
    { id: 3, name: 'Emily Johnson', grade: 'A' },
    { id: 4, name: 'Michael Brown', grade: 'C' },
  ];

  private schoolService = inject(SchoolServiceService);

  ngOnInit(): void {
    console.log('StudentsComponent initialized with students:', this.students);
  }

  filteredStudents = [...this.students]; // Initially showing all students
  searchTerm: string = '';

  // Method to filter students based on search term
  searchStudents(): void {
    this.filteredStudents = this.students.filter(
      (student) =>
        student.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        student.grade.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to add a new student (open add student form)
  addStudent(): void {
    console.log('Add new student');
    // Navigate to add student form or open modal
  }

  // Method to view student details
  viewStudentDetails(studentId: number): void {
    console.log('View student details for ID:', studentId);
    // Navigate to student details page or show modal
  }

  // Method to edit student information
  editStudent(studentId: number): void {
    console.log('Edit student with ID:', studentId);
    // Navigate to edit student form or open modal
  }

  // Method to delete student from the list
  deleteStudent(studentId: number): void {
    this.students = this.students.filter((student) => student.id !== studentId);
    this.filteredStudents = [...this.students]; // Refresh the list after deletion
    console.log('Deleted student with ID:', studentId);
  }
}
