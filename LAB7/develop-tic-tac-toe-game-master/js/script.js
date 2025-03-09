// Game State
let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let moveCount = 9;
let gameOver = false;

// Button click handler
const play = (event) => {
    if (gameOver) return;

    const button = event.target;
    const index = parseInt(button.id.split('-')[1]) - 1;
    
    // Apply event to generate new game state
    if (gameState[index] === '') {
        gameState[index] = currentPlayer;
        moveCount--;
    } else {
        return;
    }

    // Game state renderer renders the generated game state
    button.innerText = currentPlayer;
    button.disabled = true;

    // Update panel values such as Turn Played By and Moves Left
    document.getElementById('next-player').innerText = `Turn Played By: ${currentPlayer === 'X' ? 'O' : 'X'}`;
    document.getElementById('move-count').innerText = `Moves Left: ${moveCount}`;

    // Implement logic to get the winner
    if (checkWinner(currentPlayer)) {
        document.getElementById('winner-display-board').innerText = `${currentPlayer} Wins!`;
        document.getElementById('winner-display-board').style.display = 'block';
        gameOver = true;
        return;
    }

    // Announce draw if no moves left
    if (moveCount === 0) {
        document.getElementById('winner-display-board').innerText = `It's a Draw!`;
        document.getElementById('winner-display-board').style.display = 'block';
        gameOver = true;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

// Function to check winner
const checkWinner = (player) => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    return winningCombinations.some(combination =>
        combination.every(index => gameState[index] === player)
    );
};

// Reset game to start a new
const resetGame = () => {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    moveCount = 9;
    gameOver = false;
    document.getElementById('winner-display-board').style.display = 'none';
    document.getElementById('next-player').innerText = `Turn Played By: X`;
    document.getElementById('move-count').innerText = `Moves Left: 9`;
    document.querySelectorAll('.box').forEach(button => {
        button.innerText = '';
        button.disabled = false;
    });
};

// Bind events to clickable buttons
function enableButtons() {
    document.querySelectorAll('.box').forEach(button => {
        button.addEventListener('click', play);
    });
    document.getElementById('reset').addEventListener('click', resetGame);
    document.getElementById('replay').addEventListener('click', resetGame);
}

document.addEventListener('DOMContentLoaded', enableButtons);

module.exports = play;
