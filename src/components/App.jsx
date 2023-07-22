import React from "react";
import user from "components/Profile/user.json";
import { Profile } from "components/Profile/Profile";
import data from "components/Statistics/data.json";
import { Statistics } from "components/Statistics/Statistics";
import friends from "components/FriendList/friends.json";
import FriendList from "components/FriendList/FriendList";
import transactions from "components/Transaction/transactions.json";
import TransactionHistory from "components/Transaction/Transaction";


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data}
      />
      
      <FriendList
        friends={friends}
      />

      <TransactionHistory
        items={transactions}
      />

    </div>
  );
};
