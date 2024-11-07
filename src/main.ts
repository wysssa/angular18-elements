import { createApplication } from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef } from '@angular/core';


(async () => {
  const app: ApplicationRef = await createApplication(appConfig);
  const element = createCustomElement(AppComponent, {injector: app.injector});
  customElements.define('my-element', element);
})();
