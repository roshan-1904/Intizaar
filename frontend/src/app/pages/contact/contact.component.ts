import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent {
  isLoading: boolean = false;

  contact = {
    name: '',
    email: '',
    message: '',
    serviceType: 'General Inquiry' 
  };

  
  constructor(private http: HttpClient) { }

  async submitForm(form: NgForm) {
    if (form.valid) {
      this.isLoading = true; 
      try {
        
        const backendUrl = 'https://intizaar.onrender.com/api/contact'; 

        const response = await this.http.post(backendUrl, this.contact).toPromise();
        console.log('Backend response:', response);
        alert('Message sent successfully!');
        
        form.resetForm({ serviceType: 'General Inquiry' });
      } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        this.isLoading = false; 
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

