
import { ExerciseAnswers } from "./ExerciseAnswers"
import { ExerciseStatement } from "./ExerciseStatement"
import './Exercise.css'

export const Exercise = () => {

    return (
        <main className="exercise">
            <ExerciseStatement />
            <ExerciseAnswers />
        </main>
    )
}
