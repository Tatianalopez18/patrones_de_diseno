import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    const currentUrl = this.router.url;
    if (currentUrl !== '/' && currentUrl !== '/home' && currentUrl !== '') {
      this.location.back();
    } 
  } 
}
