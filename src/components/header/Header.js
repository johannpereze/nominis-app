import { LifePoints } from "../commons/LifePoints"
import { LogoNominis } from "../commons/LogoNominis"
import { SoundControl } from "../commons/SoundControl"
import { UserAvatar } from "../commons/UserAvatar"
import { StoryInfo } from "../commons/StoryInfo"

import './Header.css'
import { useContext } from "react"
import { GameContext } from "../../GameContext"

export const Header = () => {

    const { gameState } = useContext(GameContext)
    const { storyTitle, storySubtitle, userLifePoints, userAvatarUrl, soundControl } = gameState

    return (
        <header className="header">
            <div className='header__left'>
                <div className="header__left--left">
                    <LogoNominis />
                    <StoryInfo storyTitle={storyTitle} storySubtitle={storySubtitle} />
                </div>
                <div className="header__left--right">
                    <LifePoints userLifePoints={userLifePoints} />
                    <UserAvatar userAvatarUrl={userAvatarUrl} />
                </div>
            </div>
            <div className='header__right'>
                <SoundControl soundControl={soundControl} />
            </div>
        </header>
    )
}
