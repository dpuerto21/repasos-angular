import { Component } from '@angular/core';
import { interval } from 'rxjs';

interface jugador {
  nombre: string;
  edad: number;
  club: string;
  nacionalidad: string;
  posicion: string;
}

@Component({
  selector: 'app-listas',
  standalone: false,

  templateUrl: './listas.component.html',

  styleUrl: './listas.component.css',
})
export class ListasComponent {
  public jugador: jugador = {
    nombre: 'jhon ',
    edad: 21,
    club: 'Aston villa',
    nacionalidad: 'colombiana',
    posicion: ' delantero centro',
  };

  public jugadores: string[] = [
    'vinicius',
    'valverde',
    'dembele',
    'hallan',
    'rodrigo',
    'lamine yamal',
    'mbape',
    'jhon duran',
    'salah',
    'mac Alister',
  ];

  playerEliminate: string = '';

  getLastPlayer() {
    let eliminatePlayer = this.jugadores.pop();

    this.playerEliminate = eliminatePlayer!;
  }
}
