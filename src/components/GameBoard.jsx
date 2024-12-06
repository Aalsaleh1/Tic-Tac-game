/*
const intailGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
]*/
export default function GameBoard({onSelect,board/*isActSym*/}){
/*let gameBoard = intailGameBoard;
for(const turn of turns){
    const {squar,player} = turn;
    const {row,col} = squar;
    gameBoard[row][col]= player;
}*/





    /*
    const[gameBoard,setgameBoard] = useState(intailGameBoard);
function handleSetGameBoard(rowIndex,colIndex){
    setgameBoard(pervBoard=>{
        const newBoard = [...pervBoard.map(inernalArray=>[...inernalArray])];
newBoard[rowIndex][colIndex]=isActSym;
return newBoard;
    });
onSelect();
}
*/
    return(
<ol id="game-board">
{board.map((row,rowKey)=><li key={rowKey}>
    <ol>
{row.map((col,colKey)=><li key={colKey}><button onClick={()=>onSelect(rowKey,colKey)} disabled={board[rowKey][colKey]!==null}>{col}</button></li>)}
</ol>
</li>
)}
</ol>
    );
}