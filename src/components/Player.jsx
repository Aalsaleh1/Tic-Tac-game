import { useState } from "react";
export default function Player({name2,symbol,isAct,onChange}){
    const[isTrue,setTrue] = useState(false);
    const[PlayerName,setName] = useState(name2);
    function handleState(){
        setTrue((editing)=>!editing);
        if(isTrue)
        onChange(symbol,PlayerName);
    }
    function handlePlayerName(event){
setName(event.target.value);
    }
    let player =       <span className="player-name">{PlayerName}</span>;
    let btn = <button onClick={handleState}>Edit</button>;
    if(isTrue){
     player= <input type='text' value={PlayerName} onChange={handlePlayerName}></input>;
    btn = <button onClick={handleState}>Save</button>;
    }
    return(<li className={isAct?'active':undefined}>
        <span className="player">
      {player}
      <span className="player-symbol">{symbol}</span>
      </span>
      {btn}
      </li>);
}