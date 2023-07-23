import PropTypes from 'prop-types';
import css from 'components/FriendList/friendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <div className={css.wrapper}>
            <span className={css.isOnline} style={{ backgroundColor: isOnline ? "green" : "red" }}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </div>
    )
}

export default FriendListItem;

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    id: PropTypes.number,
    isOnline: PropTypes.bool,
    name: PropTypes.string
}