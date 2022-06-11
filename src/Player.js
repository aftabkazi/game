import React from 'react'
import ReactDOM from 'react-dom'
import {useState,useEffect} from 'react'
import "./App.css"

function Player(){
    const [userChoice,setUserChoice]=useState('rock')
  const [computerChoice,setComputerChoice]=useState('rock')
  const [userPoints,setuserPoints]=useState(0)
  const [computerPoints,setComputerPoints]=useState(0)
  const [turnresults,setTurnResults]=useState(null)
  const [result,setResult]=useState("Lets see who wins")
  const [gameOver,setGameOver]=useState(false)

  const choices=['rock','paper','scissors']

  const handleOnClick=(choice)=>{
    setUserChoice(choice)
    genratateComputerChoice()
  }

  const genratateComputerChoice=()=>{
    const randomChoice=choices[Math.floor(Math.random()*choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset=()=>{ 
    window.location.reload();
  }

  useEffect(()=>{
    const comboMoves=userChoice+computerChoice
    if(userPoints<=4 && computerPoints<=4){
      if(comboMoves==='rockscissors'|| comboMoves==='paperrock'||comboMoves==='scissorspaper'){
        const updatedUserPoints=userPoints+1;
        setuserPoints(updatedUserPoints)
        setTurnResults('user got the point')
        if(updatedUserPoints===5){
          setGameOver(true)
          setResult('user wins')
        }
      }

      if(comboMoves==='paperscissors'|| comboMoves==='scissorsrock'||comboMoves==='rockspaper'){
        const updatedComputerPoints=computerPoints+1
        setComputerPoints(updatedComputerPoints)
        setTurnResults('computer got the points')

        if(updatedComputerPoints===5){
          setGameOver(true)
          setResult('computer Wins')
        }
      }

      if(comboMoves==='rockrock'|| comboMoves==='paperpaper'||comboMoves==='scissorsscissors'){
        setTurnResults('no one got a point')
      }
    }

  },[userChoice,computerChoice,])
  return (
    <div className="App">
      <h1 className='heading'>Player Vs Computer</h1>
      <div className='score'>
        <h1>User Points:{userPoints}</h1>
        <h1>Computer Points:{computerPoints}</h1>
      </div>
      <div className='choice'>
        <div className='choice-user'>
          <img className='user-hand' src={`../images/${userChoice}.png`}/>
        </div>

        <div className='choice-computer'>
          <img className='computer-hand' src={`../images/${computerChoice}.png`}/>
        </div>
      </div>

      <div children='button-div'>
        {choices.map((choice,index)=>
        <button className='button' key={index} onClick={()=>  handleOnClick(choice)} disabled={gameOver}>
          {choice}
        </button>
        )}
      </div>

      <div className='result'>
        <h1>Turn result :{turnresults}</h1>
        <h1>Final result :{result}</h1>
      </div>

      <div className='resetbutton'>
        {gameOver && 
        <button className='button' onClick={()=>reset()}>Restart</button>
        }
      </div>
    </div>
  );

}

export default Player