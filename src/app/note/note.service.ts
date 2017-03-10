import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {INote} from './note';

@Injectable()
export class NoteService {
  private _noteUrl = 'api/note/notes.json';

  constructor(private _http: Http) {
  }

  getNotes(): Observable<INote[]> {
    return this._http.get(this._noteUrl)
      .map((response: Response) => <INote[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
