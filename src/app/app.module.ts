import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {WelcomeComponent} from "./home/welcome.component";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent
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
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
