import {Component} from '@angular/core';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle: string = 'Welcome';
  public logo: string = '/assets/images/logo.jpg';
  public developer: string = 'Fisnik Bajraktari';
}
