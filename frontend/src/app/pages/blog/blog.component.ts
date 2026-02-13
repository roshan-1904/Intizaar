// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-blog',
//   templateUrl: './blog.component.html',
//   styleUrls: ['./blog.component.scss']
// })
// export class BlogComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: []
})
export class BlogComponent {

  search = '';
  category = '';

  blogs = [
    { title: 'IVF Success Tips', category: 'IVF', content: 'Improve chances with healthy lifestyle.' },
    { title: 'PCOD Diet Plan', category: 'PCOD', content: 'Manage PCOD with food and exercise.' },
    { title: 'Pregnancy Care', category: 'Gynecology', content: 'Best care during pregnancy.' },
    { title: 'Egg Freezing Guide', category: 'Fertility', content: 'Preserve your fertility safely.' }
  ];

  get filteredBlogs() {
    return this.blogs.filter(b =>
      b.title.toLowerCase().includes(this.search.toLowerCase()) &&
      (this.category ? b.category === this.category : true)
    );
  }
}
