import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx(css["status"], {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem; 