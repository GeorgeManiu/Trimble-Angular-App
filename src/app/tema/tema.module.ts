import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';



@NgModule({
  declarations: [
    Tema1Component,
    Tema2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [Tema1Component,Tema2Component]
})
export class TemaModule { }
