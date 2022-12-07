import React from "react";
import "../styles/MinimizeChat.css";

export default function MinimizeChat(props) {
  return (
    <div className="parent" onClick={ ()=> {
        props.setChat(true);
    }}>
      <div className="minimize-text">SOHBETLER</div>
    </div>
  );
}
