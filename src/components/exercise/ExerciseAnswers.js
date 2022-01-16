import { ResetButton } from "../commons/ResetButton"
import { ExerciseAnswerOptions } from "./ExerciseAnswerOptions"
import { ExerciseInput } from "./ExerciseInput"

export const ExerciseAnswers = () => {
    return (
        <div className="exercise__options--container">
            <ResetButton />
            <ExerciseInput />
            <ExerciseAnswerOptions />
        </div>
    )
}
