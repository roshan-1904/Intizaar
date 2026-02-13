// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-service-detail',
//   templateUrl: './service-detail.component.html',
//   styleUrls: ['./service-detail.component.scss']
// })
// export class ServiceDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  service: any;

  services = [
    {
      id: 1,
      title: 'IVF Treatment',
      desc: 'IVF is a process of fertilization where an egg is combined with sperm outside the body.',
      icon: '💉'
    },
    {
      id: 2,
      title: 'PCOD Care',
      desc: 'PCOD treatment focuses on hormonal balance and lifestyle management.',
      icon: '🩺'
    },
    {
      id: 3,
      title: 'Gynecology',
      desc: 'Complete gynecological services for women of all ages.',
      icon: '👩‍⚕️'
    },
    {
      id: 4,
      title: 'Fertility Preservation',
      desc: 'Preserve your fertility for future planning.',
      icon: '🧬'
    }
  ];

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service = this.services.find(s => s.id === id);
  }

  constructor(private route: ActivatedRoute) {}
}
