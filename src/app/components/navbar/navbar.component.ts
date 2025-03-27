import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'navbar',
  imports: [RouterOutlet,NgIf,RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class Navbar {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
