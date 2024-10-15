import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MyplatformService } from '../../core/services/platform/myplatform.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isNavbarCollapsed = true;

  constructor(private _MyplatformService:MyplatformService) {
  }

  ngOnInit() {
    if (this._MyplatformService.getPlatform()) {
      window.addEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  ngOnDestroy() {
    if (this._MyplatformService.getPlatform()) {
      window.removeEventListener('scroll', this.onWindowScroll.bind(this));
    }
  }

  onWindowScroll() {
    if(this._MyplatformService.getPlatform()){
      const scrollPos = window.scrollY;
      const navbar = document.querySelector('.navbar');
      if (scrollPos > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    }
   
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
