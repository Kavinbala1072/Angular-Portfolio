import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email = 'kavinbala82@gmail.com';

  downloadFile() {
    const fileUrl = '../kavinraj.docx';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'kavinraj.docx';
    link.click();
  }
}
