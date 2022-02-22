const board = document.querySelector('.board');
const resetButton = document.querySelector('#reset');

function createGrid(size) {
  const gridSize = size ** 2;
  for (let i = 0; i < gridSize; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    board.appendChild(box);
  }
}

function createGrid2(rows, columns) {}

createGrid(16);

// Gridboard event listener
document.querySelectorAll('.box').forEach((box) => {
  box.addEventListener('mouseover', (event) => {
    box.classList.add('selected');
  });
});

// Reset button event listener
resetButton.addEventListener('click', (event) => {
  document.querySelectorAll('.box').forEach((box) => {
    box.classList.remove('selected');
  });
});

//
