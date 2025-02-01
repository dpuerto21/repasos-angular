import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { SeleccionComponent } from './seleccion/seleccion.component';



@NgModule({
  declarations: [ListasComponent, SeleccionComponent, ],
  imports: [CommonModule],
  exports: [ListasComponent, SeleccionComponent, ],
})
export class SeleccionesModule {}
