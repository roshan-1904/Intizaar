import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

  appointment = {
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  };

  submit() {
    console.log(this.appointment);
    alert('Appointment booked successfully!');
  }
}

