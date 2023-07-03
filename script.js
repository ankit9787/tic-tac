let symbol = 'X';
var cells = document.getElementsByClassName('cell');

function handleCellClick() {
  ticTacSymbol(this);
}

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
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
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
