
import { ExerciseAnswers } from "./ExerciseAnswers"
import { ExerciseStatement } from "./ExerciseStatement"
import './Exercise.css'

export const Exercise = ({ instructionsTitle, instructionsBody, sentence }) => {
    return (
        <main className="exercise">
            <ExerciseStatement instructionsTitle={instructionsTitle} instructionsBody={instructionsBody}/>
            <ExerciseAnswers sentence={sentence} />
        </main>
    )
}
