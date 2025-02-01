import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { SeleccionesModule } from './selecciones/selecciones.module';
import { JugadoresModule } from './jugadores/jugadores.module';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, AppRoutingModule, SeleccionesModule,JugadoresModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
