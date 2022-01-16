import './LifePoints.css'

export const LifePoints = ({ userLifePoints }) => {

    const lifePoints = []
    for (let i = 0; i < 5 - userLifePoints; i++) {
        lifePoints.push(false)
    }

    for (let i = 0; i < userLifePoints; i++) {
        lifePoints.push(true)
    }

    return (
        <div className='life-points'>
            {lifePoints.map((lifepoint, i) => lifepoint ? <span key={i} className="pointHeart pointTrue"></span> : <span key={i} className="pointHeart pointFalse"></span>)}
        </div>
    )
}


<span className="pointHeart pointTrue"></span>