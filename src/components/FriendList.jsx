import FriendListItem from "./FriendListItem";
import "./FriendList.css"
export default function FriendList(props) {
  const friendItemAs = []
  
 
 
  props.friends.forEach(friend => {
    friendItemAs.push(<li className="item" key={friend.id}>
        <FriendListItem avatar={friend.avatar} name={friend.name} status={friend.isOnline ? 'online' : 'offline'}/>
      </li>);
  });
  
 
  return (<ul className="list">{friendItemAs}</ul>);
}
