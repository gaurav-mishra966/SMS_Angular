import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FullCalendarModule } from '@fullcalendar/angular';
// import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  // calendarEvents: EventInput[] = [
  //   { title: 'Event 1', start: '2025-04-30T10:00:00', color: '#ff0000' },
  //   { title: 'Event 2', start: '2025-05-01T12:00:00', color: '#00ff00' },
  // ];
}
