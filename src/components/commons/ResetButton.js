import { useContext } from 'react'
import { GameContext } from '../../GameContext'
import './ResetButton.css'

export const ResetButton = () => {

    const { gameState, setGameState } = useContext(GameContext)

    const handleClick = () => {
        const buttons = document.querySelectorAll("button")
        buttons.forEach((button) => button.disabled = false)
        setGameState(
            {
                ...gameState,
                inputValue: []
            }
        )
    }

    return (
        <div className="reset-control">
            <span
                className="reset-button__icon"
                onClick={handleClick}
            >
            </span>
        </div>
    )
}
