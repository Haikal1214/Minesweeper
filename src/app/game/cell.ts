export class Cell {
    status: 'closed' | 'clear' | 'mine' | 'flag' = 'closed';
    mine = false;
    proximityMines = 0;

    constructor(public row: number, public column: number) {
        this.status = 'closed';
    }
}
