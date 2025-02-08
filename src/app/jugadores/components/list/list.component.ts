import { Component, EventEmitter, Input, Output } from '@angular/core';
import { jugador } from '../../interfaces/jugador.interface';
import { from } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public listPlayers: jugador[] = [];

  @Output()
  public onDeletedPlayer = new EventEmitter<number>();

  onDeletedPlayerI(index: number) {
    this.onDeletedPlayer.emit(index);
  }
}
