import s from "./FriendList.module.css";
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar}></img>
      <p className={s.nameListItem}>{name}</p>
      <p className={isOnline ? s["online"] : s["offline"]}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}
