import './UserAvatar.css'

export const UserAvatar = ({userAvatarUrl}) => {
    return (
        <div>
            <div className="user-avatar"><img src={userAvatarUrl} alt="user" /></div>
        </div>
    )
}
