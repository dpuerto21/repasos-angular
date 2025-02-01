import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresComponent } from './jugadores.component';



@NgModule({
  declarations: [JugadoresComponent],
  imports: [
    CommonModule
  ],
  exports:[JugadoresComponent]
})
export class JugadoresModule { }
