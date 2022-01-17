import { useContext } from 'react'
import { GameContext } from '../../GameContext'
import './Exercise.css'

export const ExerciseInput = () => {

    const { gameState } = useContext(GameContext)
    const { inputValue } = gameState

    const handleChange = () => {
        console.log("handleChange");
    }

    return (
        <div className="exercise-input">
            <input
                disabled
                type="text"
                name=""
                id=""
                value={inputValue.join(" ")}
                onChange={handleChange}
            />
        </div>
    )
}
