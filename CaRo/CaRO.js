class Game {
    constructor() {
        this.board = [];
        this.isX = true;
        this.winner = 0;
        this.init();
        this.isEnd = false;
    }

    init() {
        let a = new Array(20);
        for (let i = 0; i < a.length; i++) {
            a[i] = new Array(20).fill(0);
        }
        this.board = a;

        for (let i = 1; i <= 20; i++) {
            c.moveTo(0, 25 * i);
            c.lineTo(500, 25 * i);
            c.moveTo(25 * i, 0);
            c.lineTo(25 * i, 500)
            c.stroke();
        }
    }

    add(x, y) {
        if (this.isX) {
            if (this.board[y][x] == 0) {
                this.board[y][x] = 1;
                this.drawX(x * 25, y * 25);
                this.isX = false;
            }
        } else {
            if (this.board[y][x] == 0) {
                this.board[y][x] = 2;
                this.drawO(x * 25, y * 25);
                this.isX = true;
            }
        }
    }

    drawX(x, y) {
        c.moveTo(x + 3, y + 3)
        c.lineTo(x + 19, y + 19);
        c.moveTo(x + 19, y + 3);
        c.lineTo(x + 3, y + 19);
        c.stroke();
    }

    drawO(x, y) {
        c.beginPath();
        c.arc(x + 25 / 2, y + 25 / 2, 25 / 2 - 3, 0, 2 * Math.PI)
        c.stroke();
    }

    check() {
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 20; j++) {
                if (
                    (
                        this.board[i][j] != 0
                        &&
                        this.board[i][j] == this.board[i][j + 1] && this.board[i][j + 1] == this.board[i][j + 2] &&
                        this.board[i][j + 2] == this.board[i][j + 3] && this.board[i][j + 3] == this.board[i][j + 4]
                    )
                    ||
                    (
                        this.board[i][j] != 0
                        &&
                        this.board[i][j] == this.board[i + 1][j] && this.board[i + 1][j] == this.board[i + 2][j] &&
                        this.board[i + 2][j] == this.board[i + 3][j] && this.board[i + 3][j] == this.board[i + 4][j]
                    )
                    ||
                    (this.board[i][j] != 0
                        &&
                        this.board[i][j] == this.board[i + 1][j + 1] && this.board[i + 1][j + 1] == this.board[i + 2][j + 2] &&
                        this.board[i + 2][j + 2] == this.board[i + 3][j + 3] && this.board[i + 3][j + 3] == this.board[i + 4][j + 4]
                    )
                    ||
                    (
                        this.board[i][20 - j] != 0
                        && this.board[i][20 - j] == this.board[i + 1][20 - j - 1] && this.board[i + 1][20 - j - 1] == this.board[i + 2][20 - j - 2] &&
                        this.board[i + 2][20 - j - 2] == this.board[i + 3][20 - j - 3] && this.board[i + 3][20 - j - 3] == this.board[i + 4][20 - j - 4]
                    )
                ) {
                    if (this.isX) {
                        this.winner = 2;
                    } else {
                        this.winner = 1;
                    }
                    this.isEnd = true;
                }
            }
        }
    }
}