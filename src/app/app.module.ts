import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';

import {AppComponent} from './app.component';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        TranslatePipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent, data: {title: 'Welcome'}},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    providers: [
        TRANSLATION_PROVIDERS,
        TranslateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
