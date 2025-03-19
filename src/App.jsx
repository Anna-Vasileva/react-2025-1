// import { useState } from 'react'
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
