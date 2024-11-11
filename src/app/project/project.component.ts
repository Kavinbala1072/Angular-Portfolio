import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
downloadMarket(): void {
    const fileUrl = '../Market Billing.rar'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Market Billing.rar';
    link.click();
  }
}
