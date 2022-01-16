import './ExerciseStatement.css'

export const ExerciseStatement = ({ instructionsTitle, instructionsBody }) => {
    return (
        <div className="exercise__statement">
            <h2>{instructionsTitle}</h2>
            <p>{instructionsBody}</p>
        </div>
    )
}
