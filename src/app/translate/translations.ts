import { OpaqueToken } from '@angular/core';

// import translations
import { LANGUAGES } from './languages';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: LANGUAGES },
];
