import { Component, OnInit } from '@angular/core';
import { Classes } from '../../models/classes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent implements OnInit {
  classes: Classes[] = [
    {
      id: 1,
      name: 'Math 101',
      teacher: 'Mr. John Doe',
      students: ['Alice', 'Bob', 'Charlie'],
    },
    {
      id: 2,
      name: 'Science 101',
      teacher: 'Ms. Jane Smith',
      students: ['David', 'Eva', 'Fay'],
    },
    {
      id: 3,
      name: 'History 101',
      teacher: 'Dr. William Brown',
      students: ['Grace', 'Hannah', 'Ivy'],
    },
  ];

  ngOnInit(): void {}
  viewClassDetails(classId: number): void {
    console.log(`Viewing details for class with ID: ${classId}`);
  }

  addClass(): void {
    console.log('Adding a new class');
  }
}
