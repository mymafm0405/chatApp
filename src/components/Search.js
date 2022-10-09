import React from "react";

export default function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
        <div className="userChat">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="My profile"
          />
          <div className="userChatInfo">
            <span>John</span>
          </div>
        </div>
      </div>
    </div>
  );
}
