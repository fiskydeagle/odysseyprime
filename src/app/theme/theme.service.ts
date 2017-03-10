import {Injectable, Inject} from '@angular/core';
import {THEMES} from './themes'; // import our opaque token

@Injectable()
export class ThemeService {
  private _currentTheme: string;

  public get currentTheme() {
    return this._currentTheme;
  }

  // inject our translations
  constructor(@Inject(THEMES) private _themes: any) {
  }

  public use(theme: string): void {
    // set current language
    this._currentTheme = theme;
  }

  public getTheme(): any {
    if (this._themes[this.currentTheme]) {
      return this._themes[this.currentTheme];
    }
    return {
      link: ''
    };
  }
}
