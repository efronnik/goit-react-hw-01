import css from "./FriendsList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends}) => {
  return (
    <ul className={css.list}>
      {friends.map(({avatar, name, isOnline, id}) => (
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
