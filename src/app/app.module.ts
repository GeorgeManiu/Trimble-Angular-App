import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Curs3Component } from './curs3/curs3.component';
import { TestModule } from './test/test.module';
import { TemaModule } from './tema/tema.module';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    Curs3Component,
    NoteComponent,
    ToolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule,
    TemaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
