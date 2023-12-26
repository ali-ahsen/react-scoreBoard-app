import React from "react";
import Counter from "./Counter";
const Player =(props)=>(
    console.log(props),
    <div className="player">
  <span className='player-name'>
  <button className='remove-player' onClick={ ()=> props.removePlayer(props.id)}>X</button>
    {props.hScore === props.score ?  '⭐' : ''}
    {props.name} 
  </span>
  <Counter index={props.index} score={props.score} changeScore={props.changeScore} />
    </div>
  )

  export default Player