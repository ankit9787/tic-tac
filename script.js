let symbol = 'X';
var cells = document.getElementsByClassName('cell');

// Define the event listener function
function handleCellClick() {
  ticTacSymbol(this);
}

// Add the event listener to each cell
Array.from(cells).forEach(function (cell) {
  cell.addEventListener('click', handleCellClick);
});

function ticTacSymbol(cell) {
  if (cell.textContent === "") {
    symbol = symbol === 'X' ? 'O' : 'X';
    cell.textContent = symbol;
    winCheck();
  }
}

function winCheck() {
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal bottom-left to top-right
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const cellA = cells[a].textContent;
    const cellB = cells[b].textContent;
    const cellC = cells[c].textContent;

    if (cellA !== "" && cellA === cellB && cellB === cellC) {
      document.querySelector('.win').style.display = 'block';

      // Remove the event listener from all cells
      Array.from(cells).forEach(function (cell) {
        cell.removeEventListener('click', handleCellClick);
      });

      return;
    }
  }
}
