import { useState } from 'react';
import { Header } from './components/header/Header';
import { Exercise } from './components/exercise/Exercise';

import avatar from './assets/avatar.jpg'
import backgroundDesktop from './assets/desktop-background.png'

import './App.css';

export const App = () => {

  const initialState = {
    storyTitle: "Story Title",
    storySubtitle: "Episode 1",
    userLifePoints: 4,
    userAvatarUrl: avatar,
    soundControl: true,
    instructionsTitle: "Let's practice",
    instructionsBody: "Put the words in order to make a correct sentence.",
  }

  const [state] = useState(initialState)

  return (
    <div className='app-body' style={{ backgroundImage: `url(${backgroundDesktop})` }}>
      <Header {...state} />
      <Exercise {...state} />
    </div>
  )
}

