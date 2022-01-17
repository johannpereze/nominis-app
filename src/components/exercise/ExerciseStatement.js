import { useContext } from 'react'
import { GameContext } from '../../GameContext'
import './Exercise.css'

export const ExerciseStatement = () => {

    const { gameState } = useContext(GameContext)
    const { instructionsTitle, instructionsBody } = gameState

    return (
        <div className="exercise__statement">
            <h2>{instructionsTitle}</h2>
            <p>{instructionsBody}</p>
        </div>
    )
}
