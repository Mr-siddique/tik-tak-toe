const $contianer = document.getElementsByClassName('buttonContainer')[0];
const $status = document.getElementById('status');

// console.log($contianer.children[0].children)
// for(let i=0;i<$contianer.children.length;i++){
//     for(let j=0;j<$contianer.children[i].children.length;j++)
//     $contianer.children[i].children[j].innerText=null
// }
let sign = 'X';
let player = 'A';
let board = [];
let winner;
board.push(new Array(3));
board.push(new Array(3));
board.push(new Array(3));

function isWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] == player && board[i][1] == player && board[i][2] == player)
            return true;
    }
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player)
            return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player)
        return true;
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player)
        return true;
    return false;
}
function isGameDraw() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === undefined)
                return false;
        }
    }
    return true;
}
function gameStatus() {
  if(isWinner()){
      winner=player;
      $status.innerText=`${winner} won!`;
      return
  }else if(isGameDraw()){
      winner='D'
      $status.innerText=`Game Draw!`;
  }else{
      $status.innerText=`Player ${player==='A'?'B':'A'} turn!`;
  }
}

$contianer.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON' || winner)
        return;

    const id = e.target.id;
    const row = id[0] - '0';
    const col = id[1] - '0';

    if (board[row][col] !== undefined) return;


    e.target.innerText = sign;
    board[row][col] = player;

    gameStatus();
    sign = sign === 'X' ? '0' : 'X';
    player = player === 'A' ? 'B' : 'A';

});