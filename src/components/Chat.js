import React from "react";
import Add from "../images/add2.png";
import Cam from "../images/cam.png";
import More from "../images/more.png";
import Input from "./Input";
import Messages from "./Messages";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Mahmoud</span>
        <div className="chatIcons">
          <img src={Cam} alt="cam icon" />
          <img src={Add} alt="add icon" />
          <img src={More} alt="more icon" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
}
