import { Component } from '@angular/core';
import Typed from 'typed.js';
import { MyplatformService } from '../../core/services/platform/myplatform.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
 constructor(private _MyplatformService:MyplatformService){}

  ngAfterViewInit() {
    if(this._MyplatformService.getPlatform()){
      this.initTyped();
    }
  }

  private initTyped() {
    const options = {
      strings: ['Programmer', 'FrontEnd Developer', 'Web Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed('#typed-text', options);
  }
}
