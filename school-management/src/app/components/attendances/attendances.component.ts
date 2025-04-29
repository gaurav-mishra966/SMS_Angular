import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/students';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attendances',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attendances.component.html',
  styleUrl: './attendances.component.scss',
})
export class AttendancesComponent implements OnInit {
  students: Students[] = [
    { id: 1, name: 'Alice', grade: 'A', status: 'absent' },
    { id: 2, name: 'Bob', grade: 'A', status: 'present' },
    { id: 3, name: 'Charlie', grade: 'A', status: 'absent' },
    { id: 4, name: 'David', grade: 'A', status: 'present' },
    { id: 5, name: 'Eva', grade: 'A', status: 'absent' },
  ];

  ngOnInit(): void {}

  // Method to toggle student attendance status
  toggleAttendance(student: Students): void {
    student.status = student.status === 'present' ? 'absent' : 'present';
  }

  // Optional: Save attendance data (e.g., to an API)
  saveAttendance(): void {
    console.log('Attendance data:', this.students);
    // Here you can send the attendance data to an API or backend for storage.
  }
}
