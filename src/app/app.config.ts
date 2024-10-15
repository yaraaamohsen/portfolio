import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions()), provideClientHydration(), provideAnimationsAsync(), importProvidersFrom([ BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })])]
};
