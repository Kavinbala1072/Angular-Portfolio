import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  standalone: false
})
export class SkillsComponent implements AfterViewInit {
  @ViewChild('piecanvashtml5', { static: false }) piecanvashtml5!: ElementRef;
  @ViewChild('piecanvascss3', { static: false }) piecanvascss3!: ElementRef;
  @ViewChild('piecanvasSQL', { static: false }) piecanvasSQL!: ElementRef;
  @ViewChild('piecanvasJS', { static: false }) piecanvasJS!: ElementRef;
  @ViewChild('piecanvasVB', { static: false }) piecanvasVB!: ElementRef;

  // Example skill data, you can replace these with your actual data
  html5Skill = 80;  // Percentage for HTML5 skill
  css3Skill = 80;   // Percentage for CSS3 skill
  sqlSkill = 60;    // Percentage for SQL skill
  jsSkill = 35;     // Percentage for JavaScript skill
  vbSkill = 50;     // Percentage for VB.NET skill

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    // HTML5 Skill Chart
    const html5Ctx = this.piecanvashtml5.nativeElement.getContext('2d');
    new Chart(html5Ctx, {
      type: 'pie',
      data: {
        // labels: ['HTML5'],
        datasets: [
          {
            data: [this.html5Skill, 100 - this.html5Skill],
            backgroundColor: ['#ff3c00', '#f3f3f3'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // CSS3 Skill Chart
    const css3Ctx = this.piecanvascss3.nativeElement.getContext('2d');
    new Chart(css3Ctx, {
      type: 'pie',
      data: {
        // labels: ['CSS3'],
        datasets: [
          {
            data: [this.css3Skill, 100 - this.css3Skill],
            backgroundColor: ['#1479d8', '#f3f3f3'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // SQL Skill Chart
    const sqlCtx = this.piecanvasSQL.nativeElement.getContext('2d');
    new Chart(sqlCtx, {
      type: 'pie',
      data: {
        // labels: ['SQL'],
        datasets: [
          {
            data: [this.sqlSkill, 100 - this.sqlSkill],
            backgroundColor: ['#df2e86', '#f3f3f3'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // JavaScript Skill Chart
    const jsCtx = this.piecanvasJS.nativeElement.getContext('2d');
    new Chart(jsCtx, {
      type: 'pie',
      data: {
        // labels: ['JavaScript'],
        datasets: [
          {
            data: [this.jsSkill, 100 - this.jsSkill],
            backgroundColor: ['#fffb3f', '#f3f3f3'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });

    // VB.NET Skill Chart
    const vbCtx = this.piecanvasVB.nativeElement.getContext('2d');
    new Chart(vbCtx, {
      type: 'pie',
      data: {
        // labels: ['VB.NET'],
        datasets: [
          {
            data: [this.vbSkill, 100 - this.vbSkill],
            backgroundColor: ['#2058ff', '#f3f3f3'],
            hoverOffset: 4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}
