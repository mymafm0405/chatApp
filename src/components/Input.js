import React from "react";
import Attach from "../images/attach.png";
import Img from "../images/img.png";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something here..." />
      <div className="send">
        <img src={Img} alt="img icon" />
        <input type="file" style={{ display: "none" }} id="attach" />
        <label htmlFor="attach">
          <img src={Attach} alt="attach icon" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}
