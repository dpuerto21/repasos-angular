import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresComponent } from './jugadores.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    JugadoresComponent,
    MainPageComponent,
    ListComponent,
    AddPlayersComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [JugadoresComponent, MainPageComponent, ListComponent],
})
export class JugadoresModule {}
