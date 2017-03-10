import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IHealthcare} from './healthcare';

@Injectable()
export class HealthcareService {
  private _healthcareUrl = 'api/healthcare/healthcare-list.json';

  constructor(private _http: Http) {
  }

  getHealthcareList(): Observable<IHealthcare[]> {
    return this._http.get(this._healthcareUrl)
      .map((response: Response) => <IHealthcare[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
