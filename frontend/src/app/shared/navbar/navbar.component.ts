import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [] 
})
export class NavbarComponent {
  mobileOpen = false;

  navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: 'Admin', path: '/admin' } // Admin link goes to login page
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMenu() {
    this.mobileOpen = false;
  }

  go(path: string) {
    this.router.navigate([path]);
    this.closeMenu();
  }
}
