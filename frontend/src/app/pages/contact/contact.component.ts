import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form validation
import { HttpClient } from '@angular/common/http'; // Import HttpClient

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: []
})
export class ContactComponent {

  contact = {
    name: '',
    email: '',
    message: '',
    serviceType: 'General Inquiry' // Added serviceType with default
  };

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) { }

  async submitForm(form: NgForm) {
    if (form.valid) {
      try {
        // Replace with your backend API URL
        const backendUrl = 'https://intizaar.onrender.com/api/contact'; // Assuming backend runs on port 5000

        const response = await this.http.post(backendUrl, this.contact).toPromise();
        console.log('Backend response:', response);
        alert('Message sent successfully!');
        // Reset form
        form.resetForm({ serviceType: 'General Inquiry' });
      } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('Failed to send message. Please try again later.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
}

