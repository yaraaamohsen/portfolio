import { StarBgComponent } from './additions/star-bg/star-bg.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { NavbarComponent } from './additions/navbar/navbar.component';
import { ParticlesBgComponent } from "./additions/particles-bg/particles-bg.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParticlesBgComponent, NavbarComponent, StarBgComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    // Example animation: Fade in and out
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('500ms ease-in-out')])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';
  constructor(private _flowbiteService: FlowbiteService) { }

  ngOnInit(): void {
    this._flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  isVisible = true; // Example property for animation control

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }


}
