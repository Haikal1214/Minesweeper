import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './app/environments/environment';


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent)

  .catch(err => console.error(err));
