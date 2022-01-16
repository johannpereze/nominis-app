import { LifePoints } from "../commons/LifePoints"
import { LogoNominis } from "../commons/LogoNominis"
import { SoundControl } from "../commons/SoundControl"
import { UserAvatar } from "../commons/UserAvatar"
import { StoryInfo } from "../commons/StoryInfo"

import './Header.css'

export const Header = ({ nominisLogo, storyTitle, storySubtitle, userLifePoints, userAvatarUrl, soundControl }) => {
    return (
        <header className="header">
            <div className='header__left'>
                <LogoNominis nominisLogo={nominisLogo} />
                <StoryInfo storyTitle={storyTitle} storySubtitle={storySubtitle} />
                <LifePoints userLifePoints={userLifePoints} />
                <UserAvatar userAvatarUrl={userAvatarUrl} />
            </div>
            <div className='header__right'>
                <SoundControl soundControl={soundControl} />
            </div>
        </header>
    )
}
