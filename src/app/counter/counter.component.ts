import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,

  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;

  increaseby(value: number) {
    this.counter += value;
  }
  reset() {
    this.counter = 0;
  }
}
