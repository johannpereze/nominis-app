import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { GameContext } from '../../GameContext';
import { ExerciseAnswerOptions } from "./ExerciseAnswerOptions";

describe('Tests for ExerciseAnswerOptions', () => {
    test('should render correctly', () => {

        render(
            <GameContext.Provider value={{
                gameState: {
                    sentence: "This is a test",
                    inputValue: [],
                    userLifePoints: 4
                }
            }}>
                <ExerciseAnswerOptions />
            </GameContext.Provider>
        )
        screen.getByText("test")
    })

    test('should disable the answer button when clicked', () => {

        const setGameState = jest.fn()

        render(
            <GameContext.Provider value={{
                gameState: {
                    sentence: "This is a test",
                    inputValue: [],
                    userLifePoints: 4
                },
                setGameState
            }}>
                <ExerciseAnswerOptions />
            </GameContext.Provider>
        )
        const button = screen.getByText("test")

        fireEvent.click(button)

        expect(button).toHaveAttribute("disabled")
    })



})

