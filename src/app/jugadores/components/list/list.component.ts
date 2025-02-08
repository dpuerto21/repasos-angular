import { Component, Input } from '@angular/core';
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

  onDeletedPlayer(index: number) {
    const Delete = this.listPlayers.splice(index, 1 );
    console.log(Delete);
  }
}
