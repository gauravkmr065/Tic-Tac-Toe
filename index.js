const boxes = document.querySelectorAll(".box");
const playText = document.getElementById("playText");
const restatBtn = document.querySelector("#restartBtn");
const spaces = [];
const o_text = "0";
const x_text = "x";
let currentPlayer;
const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid var(--purple);`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid var(--purple);`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid var(--purple);`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid var(--purple);`;
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};
const boxClicked = (e) => {
  const id = e.target.id;
  // console.log(id);
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playHasWon()) {
      playText.innerText = `${currentPlayer} has Won!!`;
      return;
    }
    currentPlayer = currentPlayer === o_text ? x_text : o_text;
  }
};

const playHasWon = () => {
  if (spaces[0] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
      console.log(`${currentPlayer} wins on the left`);
      return true;
    }
    if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
      console.log(`${currentPlayer} wins up diagolny`);
      return true;
    }
  }
  if (spaces[8] == currentPlayer) {
    if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
      console.log(`${currentPlayer} wins up right`);
      return true;
    }
    if (spaces[6] == currentPlayer && spaces[7] == currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
  if (spaces[4] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
      console.log(`${currentPlayer} wins up virtical in middle`);
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[5] == currentPlayer) {
      console.log(`${currentPlayer} wins on the horizontal middle`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = "Let's Play!";
  currentPlayer = o_text;
};

restatBtn.addEventListener("click", restart);
restart();
drawBoard();
