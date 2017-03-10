import {Component, OnInit} from '@angular/core';
import {TranslateService} from "./translate";
import {ThemeService} from "./theme";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public pageTitle: string = "Odysseyprime";

    public supportedLanguages: any[];
    public supportedThemes: any[];

    constructor(private _translate: TranslateService, private _theme: ThemeService) { }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Shqip', value: 'sq' }
        ];

        this.selectLang('en');

        this.supportedThemes = [
            { display: 'Cerulean', value: 'ce' },
            { display: 'Cosmo', value: 'co' },
            { display: 'Flatly', value: 'fl' }
        ];

        this.selectTheme('fl');
        $("head").append('<link id="my_theme" rel="stylesheet" href="">');
        let themeObj = this._theme.getTheme();
        $('#my_theme').attr('href',themeObj.link);
    }

    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
    }

    isCurrentTheme(theme: string) {
      return theme === this._theme.currentTheme;
    }

    selectTheme(theme: string) {
      // set default;
      this._theme.use(theme);
      let themeObj = this._theme.getTheme();
      $('#my_theme').attr('href',themeObj.link);
    }
}
