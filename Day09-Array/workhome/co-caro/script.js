// trạng thái người chơi
let gameStatus = document.getElementById("game-status");
// restart trò chơi
let restartButton = document.getElementById("restart-btn");
// bàn cờ
let boardElement = document.getElementById("chessboard");
let cellElement = document.getElementById("cell");
let cells = document.querySelectorAll("#cell");
let gameEnd = false;
// tao mang check win
let winGame = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6] ];
let optionsArr = [];
const firstTurn = "X";
const nextTurn = "0";
let currentPlayer = firstTurn;
// khởi tạo game
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}
gameStatus.innerHTML = currentPlayer;
// event khi click ô
function cellClicked(e) {
    if (true) {
        if (this.innerHTML == "" && !gameEnd) {
            this.innerHTML = currentPlayer;
            gameStatus.innerHTML = nextTurn;
        }
    }
    if (currentPlayer == firstTurn) {
        currentPlayer = nextTurn;
    } else {
        currentPlayer = firstTurn;
        gameStatus.innerHTML = firstTurn;
    }
}
function updateCell() {
    cellElement.innerHTML = nextTurn;
    return cellElement;
}
// event restart game
restartButton.addEventListener("click", function () {
    for ( let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
} )
function checkWinner() {
    for (let i = 0; i < cells.length; i++) {
        
    }
}