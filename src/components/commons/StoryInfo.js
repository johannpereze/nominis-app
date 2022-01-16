import './StoryInfo.css'

export const StoryInfo = ({ storyTitle, storySubtitle }) => {
    return (
        <div className="story-info">
            <div className="story-info__title"><h5>{storyTitle}</h5></div>
            <div className="story-info__subtitle"><h6>{storySubtitle}</h6></div>
        </div>
    )
}
