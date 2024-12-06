export default function({turns}){
    return(<ol id="log">
    {
    turns.map(turn=><li key={`${turn.squar.row}${turn.squar.col}`}>{turn.player}selected{turn.squar.row},{turn.squar.col}</li>)
    
    }

</ol>
    );
}