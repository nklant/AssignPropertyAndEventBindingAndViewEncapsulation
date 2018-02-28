import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  @Output() intervalStarted = new EventEmitter<number>(); // @Output - so it can be caught outside this component; intervalStarted is the event name, since there is no alias
  interval;
  num = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.num + 1);
      this.num++;
    }, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }
}
