import { Component, Input } from '@angular/core';
import { jugador } from '../interfaces/jugador.interface';

@Component({
  selector: 'app-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public jugadores: jugador[] = [
    {
      name: 'falcao',
      price: 250000000,
    },
    {
      name: 'vinicius',
      price: 10000000,
    },
    {
      name: 'valverde',
      price: 850000,
    },
    {
      name: 'dembele',
      price: 450000000,
    },
    {
      name: 'hallan',
      price: 30000000,
    },
    {
      name: 'rodrigo',
      price: 650000000,
    },
    {
      name: 'lamine yamal',
      price: 210000000,
    },
    {
      name: 'mbape',
      price: 650023512,
    },
    {
      name: 'jhon duran',
      price: 5842154645,
    },
    {
      name: 'salah',
      price: 61000000,
    },
    {
      name: 'mac Alister',
      price: 78945612,
    },
  ];
  onNewPlayer(player: jugador): void {
    this.jugadores.push(player);
  }
  onDeletedPlayer(index: number) {
    const Delete = this.jugadores.splice(index, 1);
    console.log(Delete);
  }
}
