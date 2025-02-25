import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css' ]
})

export class ProjectComponent implements OnInit {
  popupOverlayOpen: boolean = false;
  popupContentOpen: boolean = false;
  popupDetails: string = '';

  projectDetails: { [key: string]: string } = {
    "ERP": `
    <h2>Accounting and Inventory Software Project</h2><br>
    <p><strong>Description:</strong> This project is designed to provide businesses with a comprehensive solution for managing both their financials and inventory. By integrating accounting and inventory tracking into a single platform, it streamlines operations, enhances decision-making, and improves overall business efficiency.</p>
    <br>
    <h3>Technologies Used:</h3>
    <ul>
        <li>VB.NET : Used for building the application and backend logic, ensuring a smooth, responsive user experience.</li>
        <li>SQL Server : Serves as the reliable database management system, providing robust data storage and retrieval for financial and inventory data.</li>
        <li>Windows Forms : Implements a user-friendly interface, ensuring ease of navigation and accessibility for users of varying technical backgrounds.</li>
    </ul><br>
    <h3>Features:</h3>
    <ul>
        <li>User-friendly Dashboard : A central hub displaying real-time financial and inventory information for easy monitoring and analysis.</li>
        <li>MSales, Purchases, and Expenses Management : Modules that track sales transactions, purchase orders, and operational expenses to ensure accurate financial records./li>
        <li>Inventory Tracking : Monitors stock levels and provides timely alerts when inventory needs replenishing, preventing stockouts and overstocking.</li>
        <li>Reporting Tools : Offers detailed financial reports and inventory audits, aiding in informed decision-making and helping businesses maintain financial health.</li>
    </ul>
    <p>This software helps businesses improve efficiency, reduce errors, and gain insights into both financial and operational data with ease.</p>
    `,
    "WEB": `
    <h2>Web - Accounting and Inventory Project</h2><br>
    <p><strong>Description:</strong>This project is designed to offer businesses a comprehensive solution for managing both their financials and inventory. By integrating accounting and inventory tracking into a single platform, it optimizes operations, enhances decision-making, and drives overall business efficiency.</p>
    <br>
    <h3>Technologies Used:</h3>
    <ul>
        <li>Angular Framework : Powers the front-end, providing a dynamic, responsive, and modern user interface for an enhanced user experience.</li>
        <li>ASP.NET Web API : Acts as the backend, handling application logic and ensuring seamless communication between the front-end and database through RESTful services.</li>
        <li>SQL Server : A reliable database management system for efficient storage and retrieval of financial and inventory data, supporting robust data integrity and scalability.</li>
    </ul><br>
    <h3>Features:</h3>
    <ul>
        <li>User-friendly Dashboard : A central hub that displays real-time financial data and inventory status, enabling users to quickly access key business metrics.</li>
        <li>Sales, Purchases, and Expenses Management : Dedicated modules to track sales transactions, manage purchase orders, and monitor operational expenses, ensuring accurate financial records and analysis./li>
        <li>Inventory Tracking : Monitors stock levels and triggers alerts when inventory requires replenishment, helping to prevent stockouts and excess inventory.</li>
        <li>Reporting Tools : Provides in-depth financial reports and inventory audits, offering valuable insights for strategic decision-making and promoting better financial health.</li>
    </ul>
    `,
    "Cart": `
      <h2>Cart - Sales with Inventory Project</h2>
      <br>
      <p><strong>Description:</strong> A simple shopping cart design in Angular can display a list of items with their rates, allowing users to add and remove items, and calculate the total cost.</p>
      <br>
      <h3>Technologies Used:</h3>
      <ul>
        <li>Angular Framework: Powers the front-end with a dynamic and responsive user interface for an enhanced shopping experience.</li>
      </ul>
      <br>
      <h3>Features:</h3>
      <ul>
        <li>User-friendly interface displaying item list and rates.</li>
        <li>Ability to add/remove items from the cart.</li>
        <li>Real-time calculation of total cost.</li>
      </ul>
    `
  };

  constructor() {}

  ngOnInit() {}

  openPopup(projectType: string) {

    if (this.projectDetails[projectType]) {
      this.popupDetails = this.projectDetails[projectType];
      this.popupOverlayOpen = true;
      this.popupContentOpen = true;
    } else {
      console.error('Invalid project type:', projectType);
    }
  }

  closePopup() {
    this.popupOverlayOpen = false;
    this.popupContentOpen = false;
  }
}
