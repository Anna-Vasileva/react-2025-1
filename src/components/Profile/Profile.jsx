import s from "./Profile.module.css";

export default function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} className={s.avatar}></img>
          <p className={s.name}>{name}</p>
          <p className={s.userOtherInfo}>@{tag}</p>
          <p className={s.userOtherInfo}>{location}</p>
        </div>
        <ul className={s.stats}>
          <li key="id-1" className={s.item}>
            <span className={s.userOtherInfo}>Followers:</span>
            <span className={s.quantity}>{followers}</span>
          </li>
          <li key="id-2" className={s.item}>
            <span className={s.userOtherInfo}>Views:</span>
            <span className={s.quantity}>{views}</span>
          </li>
          <li key="id-3" className={s.item}>
            <span className={s.userOtherInfo}>Likes:</span>
            <span className={s.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
