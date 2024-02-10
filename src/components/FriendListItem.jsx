import css from "./FriendList.module.css";
export default function FriendListItem(props) {
  return (
    <div>
      <img src={props.avatar} alt="Avatar" width="68" />
      <p className={css.name}>{props.name}</p>
      <p className={css[props.status]}>{props.status}</p>
    </div>
  );
}
