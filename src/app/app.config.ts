import {ApplicationConfig, isDevMode, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeEsCo from '@angular/common/locales/es-CO';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';

registerLocaleData(localeEsCo);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideStore(), provideEffects(), provideStoreDevtools({
    maxAge: 25,
    logOnly: !isDevMode()
  }),{provide: LOCALE_ID, useValue: 'es-CO'}],
};
