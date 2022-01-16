import { useState } from 'react';

import avatar from './assets/avatar.jpg'
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

  const { storyTitle,
    storySubtitle,
    userLifePoints,
    userAvatarUrl,
    soundControl,
    instructionsTitle,
    instructionsBody } = state

  return (
    <>
      <header className="header">
        <div className="header__logo">{"logo"}</div>
        <div className="header__story-title">{storyTitle}</div>
        <div className="header__story-subtitle">{storySubtitle}</div>
        <div className="header__life-points">{userLifePoints}</div>
        <div className="header__user-avatar"><img src={userAvatarUrl} alt="user" /></div>
        <div className="header__sound-control">{JSON.stringify(soundControl)}</div>
      </header>
      <main className="exercise">
        <div className="exercise__instructions--container">
          <h2>{instructionsTitle}</h2>
          <p>{instructionsBody}</p>
        </div>
        <div className="exercise__options--container">
          <div className="exercise__options--reset-control"><p>reset</p></div>
          <div className="exercise__options--input">
            <input type="text" name="" id="" />
          </div>
          <div className="exercise__options--answers">
            <button>answer</button>
          </div>
        </div>
      </main>
    </>
  )
}

