import React from "react";

export default function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Photo"
        />
        <div className="userChatInfo">
          <span>John</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
