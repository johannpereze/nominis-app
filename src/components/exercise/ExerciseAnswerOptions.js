import './Exercise.css'

export const ExerciseAnswerOptions = ({ sentence }) => {
    
    const words = sentence.split(' ')

    return (
        <div className="exercise__options">
            {words.map((word) => <button>{word}</button>)}
        </div>
    )
}
