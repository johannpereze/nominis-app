import { ResetButton } from "../commons/ResetButton"
import { ExerciseAnswerOptions } from "./ExerciseAnswerOptions"
import { ExerciseInput } from "./ExerciseInput"

import './Exercise.css'

export const ExerciseAnswers = () => {

    return (
        <div className="exercise__answers">
            <ResetButton />
            <ExerciseInput />
            <ExerciseAnswerOptions />
        </div>
    )
}
