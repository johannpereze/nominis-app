import { useContext, useEffect, useMemo } from 'react'
import { GameContext } from '../../GameContext'
import { shuffle } from '../helpers/shuffle'
import './Exercise.css'

export const ExerciseAnswerOptions = () => {

    const { gameState, setGameState } = useContext(GameContext)
    const { sentence, inputValue, userLifePoints } = gameState

    const words = useMemo(() => sentence.split(' '), [sentence])
    const wordsSorted = useMemo(() => shuffle(words), [words])

    const handleClick = (e) => {
        e.target.disabled = true
        console.log(e);
        setGameState({
            ...gameState,
            inputValue: [...inputValue, e.target.innerText]
        })
    }

    useEffect(() => {
        if (inputValue.join(' ') === sentence) {
            setGameState({
                ...gameState,
                sentence: "You will hire me",
                userLifePoints: userLifePoints + 1,
                inputValue: []
            })
            userLifePoints <= 4 ? alert("You Earn a HEART <3") : alert("YOU WON THE GAME! - Refresh the browser to play agaain")
            const buttons = document.querySelectorAll("button")
            buttons.forEach((button) => button.disabled = false)
            console.log("Ganaste!");
        }
    }, [gameState, inputValue, sentence, setGameState, userLifePoints, wordsSorted])

    return (
        <div className="exercise__options">
            {wordsSorted.map((word, i) => <button
                key={i}
                onClick={handleClick}
            >
                {word}
            </button>)}
        </div>
    )
}
