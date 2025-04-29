import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root',
})
export class SchoolServiceService {
  constructor() {}

  getStudents(): Observable<Students[]> {
    return of([
      { id: 1, name: 'John Doe', grade: 'A', status: 'Present' },
      { id: 2, name: 'Jane Smith', grade: 'B', status: 'Present' },
      { id: 3, name: 'David Clark', grade: 'C', status: 'Present' },
    ]);
  }

  getClasses(): Observable<any[]> {
    return of([
      { id: 1, name: 'Math 101', teacher: 'Mr. Johnson' },
      { id: 2, name: 'Science 101', teacher: 'Ms. Davis' },
      { id: 3, name: 'History 101', teacher: 'Mr. Brown' },
    ]);
  }

  getAttendance(): Observable<any[]> {
    return of([
      { studentId: 1, date: '2025-04-01', status: 'Present' },
      { studentId: 2, date: '2025-04-01', status: 'Absent' },
      { studentId: 3, date: '2025-04-01', status: 'Present' },
    ]);
  }
}
