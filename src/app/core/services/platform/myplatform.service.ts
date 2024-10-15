import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyplatformService {

  constructor(@Inject (PLATFORM_ID) private platformId: object) { }

  getPlatform(): boolean{
    return isPlatformBrowser(this.platformId)? true : false;
  }
}
