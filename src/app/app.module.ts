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
import {HealthcareListComponent} from "./healthcare/healthcare-list.component";
import {HealthcareDetailComponent} from "./healthcare/healthcare-detail.component";
import {HealthcareFilterPipe} from "./healthcare/healthcare-filter.pipe";
import {HealthcareService} from "./healthcare/healthcare.service";
import {NoteListComponent} from "./note/note-list.component";
import {NoteService} from "./note/note.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TranslatePipe,
    RetailListComponent,
    RetailDetailComponent,
    RetailFilterPipe,
    HealthcareListComponent,
    HealthcareDetailComponent,
    HealthcareFilterPipe,
    NoteListComponent
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
      {path: 'healthcare-list', component: HealthcareListComponent},
      {path: 'healthcare/:id', component: HealthcareDetailComponent},
      {path: 'notes', component: NoteListComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService,
    THEME_PROVIDERS,
    ThemeService,
    RetailService,
    HealthcareService,
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
