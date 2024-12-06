export default function GameOver({winner,onRestart}){
    return(
<div id="game-over">
<p>{winner}</p>
<h2>{winner&&"Its gameover !!"}</h2>
<h2>{!winner&&"Its a draw !!"}</h2>
<p><button onClick={onRestart}> rematch </button></p>
</div>
    );
}