import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalStarted(startedNumber: number) {
    if (startedNumber % 2 === 0) {
      this.evenNumbers.push(startedNumber);
    }else {
      this.oddNumbers.push(startedNumber);
    }
  }
}
