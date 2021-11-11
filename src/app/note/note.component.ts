import { NoteService } from './../services/note.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() selectedCategoryId: string;
  notes: Note[];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

  // showNote(note: any) {
  //   this.router.navigate(['addNote'], {
  //     queryParams: { title: note.title, description: note.description },
  //   });
  //}
  this.noteService.getNotes().subscribe((result) => {
    this.notes = result;
  })
}

ngOnChanges() {
  if (this.selectedCategoryId) {
    this.noteService.getFilteredNotes(this.selectedCategoryId).subscribe((result) => {
      this.notes = result;
    })
  }
  else {
    this.noteService.getNotes().subscribe((result) => {
      this.notes = result;
    })
  }
}

deleteNote(id: string) {
  this.noteService.deleteNote(id);
  this.noteService.getNotes().subscribe((result) => {
    this.notes = result;
  })
}

}
