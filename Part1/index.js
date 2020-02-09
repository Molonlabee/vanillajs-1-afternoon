let playerSpan;

let board = [];
const reset = document.getElementById("reset");

function play(clickedId) {
  const clickedElement = document.getElementById(clickedId);
  const playerSpan = document.getElementById("player");
  

  if (playerSpan.innerText === "X") {
    playerSpan.innerText = "O";
    clickedElement.innerText = "X";
    board[clickedId] = "X";
  } else {
    playerSpan.innerText = "X";
    clickedElement.innerText = "O";
    board[clickedId] = "O";
  }

  console.log(board);

  let topLeft = board[0];
  let topMiddle = board[1];
  let topRight = board[2];
  let middleLeft = board[3];
  let middle = board[4];
  let middleRight = board[5];
  let bottomLeft = board[6];
  let bottomMiddle = board[7];
  let bottomRight = board[8];

  if (
    topRight !== undefined &&
    topRight === topMiddle &&
    topRight === topLeft
  ) {
    alert(`Player ${topRight} Won!`);

    return;
  }

  if (
    middleLeft !== undefined &&
    middleLeft === middle &&
    middleLeft === middleRight
  ) {
    alert(`Player ${middleLeft} Won!`);
    return;
  }

  if (
    bottomLeft !== undefined &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    alert(`Player ${bottomLeft} Won!`);
    return;
  }
  if (
    topLeft !== undefined &&
    topLeft === middleLeft &&
    topLeft === bottomLeft
  ) {
    alert(`Player ${topLeft} Won!`);
    return;
  }

  if (
    topMiddle !== undefined &&
    topMiddle === middle &&
    topMiddle === bottomMiddle
  ) {
    alert(`Player ${topMiddle} Won!`);
    return;
  }
  //
  if (
    topRight !== undefined &&
    topRight === middleRight &&
    topRight === bottomRight
  ) {
    alert(`Player ${topRight} Won!`);
    return;
  }

  if (
    topRight !== undefined &&
    topRight === middle &&
    topRight === bottomLeft
  ) {
    alert(`Player ${topRight} Won!`);
    return;
  }

  if (topLeft !== undefined && topLeft === middle && topLeft === bottomRight) {
    alert(`Player ${topLeft} Won!`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert(`Cat`);
  }
}