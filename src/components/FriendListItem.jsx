import "./FriendList.css"
export default function FriendListItem(props) {
  return (
    <div>

      <img src={props.avatar} alt="Avatar" width="68" />
      <p className="name">{props.name}</p>
      <p className={props.status}>{props.status}</p>
      
    </div>
  );
}
