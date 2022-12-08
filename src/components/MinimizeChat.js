import React from "react";
import "../styles/MinimizeChat.css";
import up from "./up.png"

export default function MinimizeChat(props) {
  return (
    <div className="parent" onClick={ ()=> {
        props.setChat(true);
    }}>
      <div className="minimize-text">MESAJLAR</div>
      {/* <img
                alt="Dorse"
                src={up}
                style={{
                  borderRadius:15,
                  backgroundColor:"white",
                  marginTop:5,
                  height: 30,
                  width: 30,
                }}
              /> */}
    </div>
  );
}
