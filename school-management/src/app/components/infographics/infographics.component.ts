import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartType, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-infographics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './infographics.component.html',
  styleUrl: './infographics.component.scss',
})
export class InfographicsComponent implements OnInit {
  totalStudents = 120;
  presentToday = 95;
  absentToday = 25;
  newAdmissions = 6;

  // Dynamic Card Data
  summaryCards = [
    {
      title: 'Total Students',
      value: this.totalStudents,
      icon: 'bi-people',
      bg: 'bg-primary',
      percent: 100,
      progressColor: 'bg-light',
    },
    {
      title: 'Present Today',
      value: this.presentToday,
      icon: 'bi-check-circle',
      bg: 'bg-success',
      percent: (this.presentToday / this.totalStudents) * 100,
      progressColor: 'bg-light',
    },
    {
      title: 'Absent Today',
      value: this.absentToday,
      icon: 'bi-x-circle',
      bg: 'bg-danger',
      percent: (this.absentToday / this.totalStudents) * 100,
      progressColor: 'bg-light',
    },
    {
      title: 'New Admissions',
      value: this.newAdmissions,
      icon: 'bi-person-plus',
      bg: 'bg-info',
      percent: (this.newAdmissions / this.totalStudents) * 100,
      progressColor: 'bg-light',
    },
  ];

  // Charts
  public attendanceChartData: ChartConfiguration<'pie'>['data'] = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [this.presentToday, this.absentToday],
        backgroundColor: ['#28a745', '#dc3545'],
      },
    ],
  };
  public attendanceChartType: ChartType = 'pie';

  public gradeChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Grade A', 'B', 'C', 'D', 'F'],
    datasets: [
      {
        label: 'Students',
        data: [30, 40, 25, 15, 10],
        backgroundColor: '#007bff',
      },
    ],
  };
  public gradeChartType: ChartType = 'bar';

  // public chartOptions: ChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };

  onAddStudent() {
    alert('Navigating to add student form...');
  }

  onCardClick(title: string) {
    alert(`You clicked on: ${title}`);
  }

  ngOnInit(): void {}
}
