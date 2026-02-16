import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {

  login = { username: '', password: '' }; 

  constructor(private router: Router, private http: HttpClient) { } 

  ngOnInit(): void {
  }

  async submit() {
    try {
      const backendUrl = 'http://localhost:5000/api/admin/login';
      const response: any = await this.http.post(backendUrl, this.login).toPromise();

      if (response && response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/admin/dashboard']); 
      } else {
        alert('Login failed: No token received.');
      }
    } catch (error: any) {
      console.error('Login error:', error);
      alert('Login failed: ' + (error.error?.message || 'Invalid credentials'));
    }
  }
}
