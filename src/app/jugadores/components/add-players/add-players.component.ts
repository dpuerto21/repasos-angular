import { Component, EventEmitter, Output } from '@angular/core';
import { jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-add-players',
  standalone: false,

  templateUrl: './add-players.component.html',
  styleUrl: './add-players.component.css',
})
export class AddPlayersComponent {
  @Output()
  public onNewPlayer = new EventEmitter<jugador>();

  public formPlayer: jugador = {
    name: '',
    price: 0,
  };

  public addPlayer(): void {
    this.formPlayer.name.length
      ? this.onNewPlayer.emit({ ...this.formPlayer })
      : void 0;

    console.log(this.onNewPlayer);
    this.formPlayer = { name: '', price: 0 };
  }
}
