import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

enableProdMode();

const disableErr = false;
const disableLog = false;
const disableTime = false;
const disableTimeEnd = false;
if (window && disableLog) {
  window.console.log = () => {
  };

  window.console.info = () => {
  };

  if (disableErr) {
    window.console.error = () => {
    };
  }

  if (disableTime) {
    window.console.time = () => {
    };
  }

  if (disableTimeEnd) {
    window.console.timeEnd = () => {
    };
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
