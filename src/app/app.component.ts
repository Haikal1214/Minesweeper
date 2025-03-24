import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Board } from './game/board';
import { Cell } from './game/cell';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class AppComponent {
  title = 'minesweeper';
  board: Board;
  score = 0;

  constructor() {
    this.board = new Board(20, 50);
  }

  checkCell(cell: Cell) {
    const { result, revealedCells } = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('You win');
    } else if (result === null) {
      // Add 10 points for each safe cell that was revealed
      this.score += revealedCells.length * 10;
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'closed';
    } else {
      cell.status = 'flag';
    }
  }

  reset() {
    this.board = new Board(20, 50);
    this.score = 0;
  }
}
