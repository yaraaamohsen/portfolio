import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyplatformService } from '../../core/services/platform/myplatform.service';

@Component({
  selector: 'app-particles-bg',
  standalone: true,
  imports: [],
  templateUrl: './particles-bg.component.html',
  styleUrl: './particles-bg.component.scss'
})
export class ParticlesBgComponent {
  @ViewChild('container', { static: true }) container!: ElementRef;

  constructor(private _MyplatformService: MyplatformService) {}

  ngOnInit() {
    if(this._MyplatformService.getPlatform()){      
      setTimeout(() => {
        if (typeof (window as any).particlesJS === 'function') {
          (window as any).particlesJS('particles-js', {
            "particles": {
              "number": { "value": 100 },
              "color": { "value": "#ffffff" },
              "shape": { "type": "circle" },
              "opacity": { "value": 0.5 },
              "size": { "value": 3 },
              "line_linked": { "enable": true },
              "move": { "enable": true, "speed": 3 }
            },
            "interactivity": {
              "events": {
                "onhover": { "enable": true, "mode": "repulse" },
                "onclick": { "enable": true, "mode": "push" }
              }
            }
          });
        } else {
          console.error('particlesJS function is not available');
        }
      }, 1000);
    }
   
  }
}
