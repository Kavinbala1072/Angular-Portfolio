import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
downloadFile(): void {
    const fileUrl = '../Kavinraj B.docx'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Kavinraj.docx';
    link.click();
  }
}
