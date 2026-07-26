import { Component, inject } from '@angular/core';
import { NavigationEnd, RouterModule } from "@angular/router";
import { RouterLink } from "@angular/router";
import { Router } from "@angular/router";
import { HamburgerButton } from '../hamburger-button/hamburger-button';
import { GlassmorphismCard } from '../glassmorphism-card/glassmorphism-card';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, HamburgerButton, GlassmorphismCard],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  menuItems: { label: string; route: string }[] = [
    { label: 'Pilots', route: '/pilots' },
    { label: 'Tracks', route: '/tracks' },
    { label: 'Ranking', route: '/ranking' },
  ];
  router = inject(Router);
  currentRoute: String = '';
  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
  isHamburgerMenuActive: boolean = false;
  onHamburgerButtonChange(isActive: boolean) {
    this.isHamburgerMenuActive = isActive;
  }

}