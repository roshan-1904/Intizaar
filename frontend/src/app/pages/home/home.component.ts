

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent {

  services = [
    { title: 'IVF Treatment', desc: 'Advanced fertility solutions', icon: '💉' },
    { title: 'PCOD Care', desc: 'Hormonal balance treatments', icon: '🩺' },
    { title: 'Gynecology', desc: 'Complete women health care', icon: '👩‍⚕️' },
    { title: 'Fertility Preservation', desc: 'Plan your future safely', icon: '🧬' }
  ];
}
