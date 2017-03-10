import {Component, OnInit} from '@angular/core';

import {INote} from './note';
import {NoteService} from './note.service';

@Component({
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  pageTitle: string = 'Notes';
  errorMessage: string;

  notes: INote[];

  constructor(private _noteService: NoteService) {

  }

  ngOnInit(): void {
    this._noteService.getNotes()
      .subscribe(notes => this.notes = notes,
        error => this.errorMessage = <any>error);
  }
}
