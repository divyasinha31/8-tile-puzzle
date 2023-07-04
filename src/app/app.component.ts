import { Component } from '@angular/core';
import { DIRECTIONS, DOWN, LEFT, NO_SWAP, RIGHT, UP, TILES } from './app-constants';
import { iPosition } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  matrix: string[][];

  constructor() {
    this.matrix = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', ' ']
    ];
  }

  shuffleMatrix() {
    const isFilled: Map<string, boolean> = new Map<string, boolean>([
      [' ', false],
      ['1', false],
      ['2', false],
      ['3', false],
      ['4', false],
      ['5', false],
      ['6', false],
      ['7', false],
      ['8', false]
    ]);

    let rowArr: string[] = [];
    const size = this.matrix.length;

    this.matrix = [];

    for (let row = 0; row < size;) {
      const randomNum: number = Math.floor(Math.random() * 9); // Generate a random number between 0 - 8
      const value: string = TILES[randomNum];

      if (!isFilled.get(value)) {
        rowArr.push(value);
        isFilled.set(value, true);
      }

      if (rowArr.length === size) {
        this.matrix.push(rowArr);
        rowArr = [];
        row++;
      }
    }
  }

  moveTile(row: number, col: number) {
    const emptyTilePosition: iPosition = this.getEmptyTilePosition();
    const isEmptyTile: boolean = this.isEmptyTile(row, col, emptyTilePosition.row, emptyTilePosition.col);
    const direction: string = this.getDirection(row, col, emptyTilePosition.row, emptyTilePosition.col);

    // If the selected tile is not the empty tile and the direction of swap is a movable one
    if (!isEmptyTile && DIRECTIONS.includes(direction)) {
      this.swapTiles(row, col, emptyTilePosition.row, emptyTilePosition.col);
    }

    this.matrix = [...this.matrix];
  }

  // Get row and column indexes of empty tile
  private getEmptyTilePosition(): iPosition {
    let emptyTileRow, emptyTileCol;

    this.matrix.forEach((e, r) => {
      const index = e.findIndex((value) => value === ' ');
      if (index !== -1) {
        emptyTileRow = r;
        emptyTileCol = index;

        return;
      }
    });

    const position: iPosition = {
      row: Number(emptyTileRow),
      col: Number(emptyTileCol)
    }

    return position;
  }

  // Checking if the selected row is the empty tile
  private isEmptyTile(r: number, c: number, etr: number, etc: number) {
    return (r === etr && c === etc);
  }

  // Getting direction of movement
  private getDirection(r: number, c: number, etr: number, etc: number): string {
    let direction: string;

    if (r === etr) {
      direction = this.getHorizontalDirection(c, etc);
    } else if (c === etc) {
      direction = this.getVerticalDirection(r, etr);
    } else {
      direction = NO_SWAP;
    }

    return direction;
  }

  // Getting horizontal direction
  private getHorizontalDirection(c: number, etc: number): string {
    let direction: string
    switch (c) {
      case (etc - 1):
        direction = LEFT;
        break;

      case (etc + 1):
        direction = RIGHT;
        break;

      default:
        direction = NO_SWAP;
    }

    return direction;
  }

  // Getting vertical direction
  private getVerticalDirection(r: number, etr: number) {
    let direction: string;
    switch (r) {
      case (etr - 1):
        direction = UP;
        break;

      case (etr + 1):
        direction = DOWN;
        break;

      default:
        direction = NO_SWAP;
    }

    return direction;
  }

  // Once the direction is a movable one, the swapping is done
  private swapTiles(r: number, c: number, etr: number, etc: number) {
    const tileValue = this.matrix[r][c];
    this.matrix[r][c] = ' ';
    this.matrix[etr][etc] = tileValue;
  }
}