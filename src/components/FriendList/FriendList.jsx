import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    );
};

export default FriendList;
