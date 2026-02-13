// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-services',
//   templateUrl: './services.component.html',
//   styleUrls: ['./services.component.scss']
// })
// export class ServicesComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: []
})
export class ServicesComponent {

  services = [
    {
      id: 1,
      title: 'IVF Treatment',
      desc: 'Advanced fertility solutions with modern technology.',
      icon: '💉'
    },
    {
      id: 2,
      title: 'PCOD Care',
      desc: 'Complete hormonal care for women.',
      icon: '🩺'
    },
    {
      id: 3,
      title: 'Gynecology',
      desc: 'Comprehensive women’s healthcare services.',
      icon: '👩‍⚕️'
    },
    {
      id: 4,
      title: 'Fertility Preservation',
      desc: 'Secure your fertility for the future.',
      icon: '🧬'
    }
  ];

  constructor(private router: Router) {}

  goToService(id: number) {
    this.router.navigate(['/services', id]);
  }
}
