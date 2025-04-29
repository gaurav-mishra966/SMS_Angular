import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { AttendancesComponent } from './components/attendances/attendances.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.gaurd';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InfographicsComponent } from './components/infographics/infographics.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard],
    // pathMatch: 'full',
  },
  { path: 'students', component: StudentsComponent },
  { path: 'classes', component: ClassesComponent },
  {
    path: 'attendance',
    component: AttendancesComponent,
    // canActivate: [AuthGuard],
  },
  { path: 'calender', component: CalendarComponent },
  { path: 'infographics', component: InfographicsComponent },
];
