import { useState } from 'react'
import './SoundControl.css'

export const SoundControl = ({ soundControl }) => {

    const [sound, setSound] = useState(soundControl)

    return (
        <div className="header__sound-control">
            <span
                className={`sound-control__icon ${sound ? 'sound-control__icon--true' : 'sound-control__icon--false'}`}
                onClick={() => setSound(!sound)}
            >
            </span>
        </div>
    )
}
