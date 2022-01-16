import { ResetButton } from "../commons/ResetButton"
import { ExerciseAnswers } from "./ExerciseAnswers"
import { ExerciseInput } from "./ExerciseInput"

export const Exercise = ({ instructionsTitle, instructionsBody }) => {
    return (
        <main className="exercise">
            <div className="exercise__instructions--container">
                <h2>{instructionsTitle}</h2>
                <p>{instructionsBody}</p>
            </div>
            <div className="exercise__options--container">
                <ResetButton />
                <ExerciseInput />
                <ExerciseAnswers />
            </div>
        </main>
    )
}
