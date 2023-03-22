import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen: boolean = false;
  constructor(private router: Router) {}
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
}
