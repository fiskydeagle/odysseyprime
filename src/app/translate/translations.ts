import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_SQ_NAME, LANG_SQ_TRANS } from './lang-sq';

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {};
dictionary[LANG_EN_NAME] = LANG_EN_TRANS;
dictionary[LANG_SQ_NAME] = LANG_SQ_TRANS;

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];
