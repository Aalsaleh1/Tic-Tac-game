import Player from "./components/Player"
import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinnerCombination";////////
import GameOver from "./components/GameOver"; 
const intailGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
function der(gameTurns){
  let Plr = 'X';
  if(gameTurns.length>0&&gameTurns[0].player==='X'){
    Plr='O';
  }
  return Plr;
}

function App() {
  const[PlayerName,setPlayerName] = useState({'X':"Player 1",'O':"Player 2"});
  const[gameTurn,setGameTurn] = useState([]);
  //const[isActive,setActive] = useState('X');
 let isActive= der(gameTurn);

 let gameBoard = [...intailGameBoard.map(array=>[...array])];
for(const turn of gameTurn){
    const {squar,player} = turn;
    const {row,col} = squar;
    gameBoard[row][col]= player;
}


let winner;
for(const squar of WINNING_COMBINATIONS){
  let first =  gameBoard[squar[0].row][squar[0].column];
  let second=  gameBoard[squar[1].row][squar[1].column];
  let third=  gameBoard[squar[2].row][squar[2].column];
  if(first&&first===second&&first===third)
    winner = PlayerName[first];

}
function handleSetPlayerName(name,newName){
  setPlayerName(prevName=>{
    return{
      ...prevName,[name]:newName
    };
  });
}

function handleIsActive(rowInd,colInd){
 // setActive((currentActive)=> currentActive==='X'?'O':'X');
  setGameTurn((prevBoard)=>
  {/*A
    let Plr = 'X';
    if(prevBoard.length>0&&prevBoard[0].player==='X'){
      Plr='O';
    }*/
    let Plr = der(prevBoard);
    const ba= [{squar:{row:rowInd,col:colInd},player:Plr},...prevBoard];
    return ba;
  }
  );
}
function handleRestart(){
setGameTurn([]);
}
  return (
<main >
  <label>{isActive}</label>
  <div id="game-container">
    <ol id="players" className="highlight-player">
      <Player name2="Player 1" symbol='X' isAct={isActive==='X'} onChange={handleSetPlayerName}/>
      <Player name2="Player 2" symbol='O' isAct={isActive==='O'} onChange={handleSetPlayerName}/>
    </ol>
    {(winner||gameTurn.length===9)&& <GameOver winner={winner} onRestart={handleRestart}/>}
<GameBoard onSelect={handleIsActive} turns={gameTurn} board={gameBoard}/>  
</div>
<Log turns={gameTurn} />
</main>
  )
}

export default App
