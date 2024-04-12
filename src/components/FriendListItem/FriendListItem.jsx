import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div className={css.card}>
      <img className={css.img} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p
        className={clsx({
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
