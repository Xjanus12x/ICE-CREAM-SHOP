import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  menu: any;
  constructor(private data: HomeService, private router:Router) {}
  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  }
  ngOnInit() {
    this.data.getMenu().subscribe((data) => {
      this.menu = data;
      console.log(this.menu);
    });
  }
}
