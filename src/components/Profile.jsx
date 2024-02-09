import ProfileCss from './Profile.module.css'
function Profile(props) {
  return  (<div className={ProfileCss.profile}>
    <div>
      <img className={ProfileCss.bild}
        src={props.image}
        alt="User avatar"
      />
      <p className={ProfileCss.name}>{props.name}</p>
      <p className={ProfileCss.info}>@{props.tag}</p>
      <p className={ProfileCss.info}>{props.location}</p>
    </div>
  
    <ul className={ProfileCss.ul}>
      <li>
        <span className={ProfileCss.span}>Followers</span>
        <span className={ProfileCss.stat}>{props.stats.followers}</span>
      </li>
      <li className={ProfileCss.views}>
        <span className={ProfileCss.span}>Views</span>
        <span className={ProfileCss.stat}>{props.stats.views}</span>
      </li>
      <li>
        <span className={ProfileCss.span}>Likes</span>
        <span className={ProfileCss.stat}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>);
}
export default Profile
