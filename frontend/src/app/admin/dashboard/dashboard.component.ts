import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient and HttpHeaders
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [] // Removed styleUrls reference
})
export class DashboardComponent implements OnInit {

  contactSubmissions: any[] = []; // Property to store contact submissions

  constructor(private http: HttpClient, private router: Router) { } // Inject HttpClient and Router

  ngOnInit(): void {
    this.fetchContactSubmissions(); // Fetch data when component initializes
  }

  async fetchContactSubmissions() {
    const token = localStorage.getItem('token'); // Get JWT token from localStorage

    if (!token) {
      this.router.navigate(['/admin']); // Redirect to login if no token
      return;
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Attach token to headers
    });

    try {
      const backendUrl = 'http://localhost:5000/api/contact';
      this.contactSubmissions = await this.http.get<any[]>(backendUrl, { headers }).toPromise() ?? [];
      console.log('Contact Submissions:', this.contactSubmissions);
    } catch (error: any) {
      console.error('Error fetching contact submissions:', error);
      // Handle error, e.g., redirect to login if token is invalid/expired
      if (error.status === 401) {
        localStorage.removeItem('token');
        this.router.navigate(['/admin']);
        alert('Session expired or unauthorized. Please log in again.');
      } else {
        alert('Failed to fetch contact submissions.');
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/admin']); // Redirect to admin login page
  }
}

