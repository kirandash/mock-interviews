const gameBoard = document.getElementById("game-board");
const gameMessage = document.getElementById("game-message");
const gameBoxes = document.querySelectorAll(".box");
const restartBtn = document.getElementById("restart");
let currentPlayer = 1;
let totalMoves = 0;

const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const switchPlayer = function() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

const setHeadMessage = function() {
    gameMessage.textContent = `Player ${currentPlayer}'s turn`
}

const didPlayerWin = function() {
    const currentPlayerSign = currentPlayer === 1 ? "X" : "O";
    return WIN_CONDITIONS.some((positions) => positions.every(position => gameBoxes[position].textContent === currentPlayerSign))
}

const endGame = function() {
    gameBoxes.forEach(box => box.setAttribute("disabled", true))
}

const makeMove = function(box) {
    // Note: The events won't fire if event listener is attached to box itself but since in this case it is attached to container it will fire
    if(box.getAttribute("disabled") === "true") return;
    box.textContent = currentPlayer === 1 ? "X" : "O";
    box.setAttribute("disabled", true);
    totalMoves++;

    if(didPlayerWin()) {
        gameMessage.textContent = `Player ${currentPlayer} won!`;
        endGame();
    } else if(totalMoves >= 9) {
        gameMessage.textContent = `Tie Game`;
        endGame();
    } else {
        switchPlayer();
        setHeadMessage();
    }
}

const onBoxClick = function(e) {
    if(e.target.classList.contains("box")) {
        makeMove(e.target);
    }
}

const restartGame = function() {
    gameBoxes.forEach(box => {
        box.setAttribute("disabled", false);
        box.textContent = "";
    });
    currentPlayer = 1;
    totalMoves = 0;
    setHeadMessage();
}

gameBoard.addEventListener("click", onBoxClick);
restartBtn.addEventListener("click", restartGame)