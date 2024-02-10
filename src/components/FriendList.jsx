import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList(props) {
  const friendItemAs = [];

  props.friends.forEach(friend => {
    friendItemAs.push(
      <li className={css.item} key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline ? "online" : "offline"}
        />
      </li>
    );
  });

  return (<ul className={css.list}>{friendItemAs}</ul>);
}
