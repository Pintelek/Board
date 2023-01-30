const board = document.getElementById('board');

const boardWidth = board.clientWidth;
const boardHeight = board.clientHeight;
let count = (Math.floor(boardWidth/ 16) * Math.floor(boardHeight/16))
const allColor = ['red', 'blue', 'green', 'orange','blueviolet', 'rgb(0, 158, 163)', 'rgb(136, 1, 64)', 'rgb(136, 240, 0)']
for(let i = 0; i < count; i++){
  creatBoard()
}

board.addEventListener("mouseover", squareHover);

board.addEventListener("mouseleave", squareLeave)

function getRandomColor(){
  let key = Math.floor(Math.random() * allColor.length);
  return allColor[key];
}

function creatBoard(){
  let square = document.createElement('div');
  square.classList.add('square')
  board.append(square);
  //square.addEventListener('mouseover', squareHover);
  //square.addEventListener('mouseleave', squareLeave);
}



function squareHover(e){
  if(e.target.classList.contains("square")){
  const color = getRandomColor();
  this.style.background = `${color}`;
  // this.style.background = `red`;
  this.style.boxShadow = `0 0 3px ${color},0 0 10px ${color}`;
  }
}

function squareLeave(e){
  if(e.target.classList.contains("square")){
  this.style.background = `rgb(41, 41, 41)`;
  this.style.boxShadow = `0 0 2px rgb(0, 0, 0)`
  }
}