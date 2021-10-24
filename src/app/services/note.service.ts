import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../models/note';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  readonly baseUrl = 'https://localhost:4200';
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  serviceCall() {
    console.log('Note service was called');
  }

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(
      this.baseUrl + '/notes',
      this.httpOptions
    );
  }

  getFilteredNotes(categoryId: string): Observable<Note[]> {
    return this.httpClient
      .get<Note[]>(this.baseUrl + '/notes', this.httpOptions)
      .pipe(
        map((notes) => notes.filter((note) => note.categoryId === categoryId))
      );
  }

  addNote(noteTitle:string, noteDescription:string, noteCategoryId:string) {
    const note: Note = {
      title: noteTitle,
      description: noteDescription,
      categoryId: noteCategoryId
    }

    return this.httpClient.post(this.baseUrl+'/note', note).subscribe();
  }

  deleteNote(id: string) {
    return this.httpClient.delete(this.baseUrl + '/note/' + id).subscribe();
  }
}
