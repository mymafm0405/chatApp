import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Mahmoud</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="Photo"
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}
