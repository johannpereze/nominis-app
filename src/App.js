import { useState } from 'react';
import { Header } from './components/header/Header';
import { Exercise } from './components/exercise/Exercise';

import avatar from './assets/avatar.jpg'

import './App.css';
import { GameContext } from './GameContext';

export const App = () => {

  const initialState = {
    storyTitle: "Story Title",
    storySubtitle: "Episode 1",
    userLifePoints: 4,
    userAvatarUrl: avatar,
    soundControl: true,
    instructionsTitle: "Let's practice",
    instructionsBody: "Put the words in order to make a correct sentence.",
    sentence: "I brush my teeth",
    inputValue: [],
    buttonDisabled: false
  }

  const [gameState, setGameState] = useState(initialState)


  return (
    <div className='app-body'>
      <GameContext.Provider value={{ gameState, setGameState }}>
        <Header />
        <Exercise />
      </GameContext.Provider>
    </div>
  )
}

