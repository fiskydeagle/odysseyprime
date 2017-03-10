import {OpaqueToken} from '@angular/core';

// import translations
import {PACKAGES} from './packages';

// translation token
export const THEMES = new OpaqueToken('themes');

// providers
export const THEME_PROVIDERS = [
  {provide: THEMES, useValue: PACKAGES},
];
