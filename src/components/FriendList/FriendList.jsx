import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={s.list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li key={id} className={s.listItem}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
