import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TRANSLATION_PROVIDERS, TranslatePipe, TranslateService}   from './translate';

import {AppComponent} from './app.component';
import {WelcomeComponent} from "./home/welcome.component";
import {THEME_PROVIDERS, ThemeService} from "./theme";
import {RetailListComponent} from "./retail/retail-list.component";
import {RetailFilterPipe} from "./retail/retail-filter.pipe";
import {RetailService} from "./retail/retail.service";
import {CommonModule} from "@angular/common";
import {RetailDetailComponent} from "./retail/retail-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TranslatePipe,
    RetailListComponent,
    RetailDetailComponent,
    RetailFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'retail-list', component: RetailListComponent},
      {path: 'retail/:id', component: RetailDetailComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    THEME_PROVIDERS,
    ThemeService,
    RetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
