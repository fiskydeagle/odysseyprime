import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {IRetail} from './retail';

@Injectable()
export class RetailService {
  private _retailUrl = 'api/retail/retail-list.json';

  constructor(private _http: Http) {
  }

  getRetailList(): Observable<IRetail[]> {
    return this._http.get(this._retailUrl)
      .map((response: Response) => <IRetail[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
