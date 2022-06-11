import React from 'react'
import ReactDOM from 'react-dom'

import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import Player from './Player';
import { Computer } from './Computer';
function App() {

  const [userChoice, setUserChoice] = useState('rock')
  const [computerChoice, setComputerChoice] = useState('rock')
  const [userPoints, setuserPoints] = useState(0)
  const [computerPoints, setComputerPoints] = useState(0)
  const [turnresults, setTurnResults] = useState(null)
  const [result, setResult] = useState("Lets see who wins")
  const [gameOver, setGameOver] = useState(false)

  const choices = ['rock', 'paper', 'scissors']

  const handleOnClick = (choice) => {
    setUserChoice(choice)
    genratateComputerChoice()
  }

  const genratateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const reset = () => {
    window.location.reload();
  }

  useEffect(() => {
    const comboMoves = userChoice + computerChoice
    if (userPoints <= 4 && computerPoints <= 4) {
      if (comboMoves === 'rockscissors' || comboMoves === 'paperrock' || comboMoves === 'scissorspaper') {
        const updatedUserPoints = userPoints + 1;
        setuserPoints(updatedUserPoints)
        setTurnResults('user got the point')
        if (updatedUserPoints === 5) {
          setGameOver(true)
          setResult('user wins')
        }
      }

      if (comboMoves === 'paperscissors' || comboMoves === 'scissorsrock' || comboMoves === 'rockspaper') {
        const updatedComputerPoints = computerPoints + 1
        setComputerPoints(updatedComputerPoints)
        setTurnResults('computer got the points')

        if (updatedComputerPoints === 5) {
          setGameOver(true)
          setResult('computer Wins')
        }
      }

      if (comboMoves === 'rockrock' || comboMoves === 'paperpaper' || comboMoves === 'scissorsscissors') {
        setTurnResults('no one got a point')
      }
    }

  }, [userChoice, computerChoice])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='player' element={<Player />} />
      <Route path='computer' element={<Computer />} />
    </Routes>

  );
}

export default App;
