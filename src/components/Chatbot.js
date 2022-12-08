import React from "react";
import "../styles/Chatbot.css";

export default function Chatbot(props) {
  return (
    <div className="chat-fixed">
      <div className="center">
        <div className="contacts">
          <i className="fas fa-bars fa-2x" />
          <h2>Contacts</h2>
          <div className="contact">
            <div className="pic rogers" />
            <div className="badge">14</div>
            <div className="name">Steve Rogers</div>
            <div className="message">That is America's ass 🇺🇸🍑</div>
          </div>
          <div className="contact">
            <div className="pic stark" />
            <div className="name">Tony Stark</div>
            <div className="message">
              Uh, he's from space, he came here to steal a necklace from a
              wizard.
            </div>
          </div>
        </div>
        <div className="chat">
          <div>
            <div className="contact bar">
              <div className="pic stark" />
              <div className="name">Tony Stark</div>
              <div className="seen">Today at 12:56</div>
            </div>
            <div className="messages" id="chat">
              <div className="time">Today at 11:41</div>
              <div className="message two">
                Hey, man! What's up, Mr Stark?&nbsp;👋
              </div>

              <div className="message two">
                Uh, what is this guy's problem, Mr. Stark? 🤔
              </div>
              <div className="message stark">
                Uh, he's from space, he came here to steal a necklace from a
                wizard.
              </div>
              
              <div className="message stark">
                <div className="typing typing-1" />
                <div className="typing typing-2" />
                <div className="typing typing-3" />
              </div>
            </div>
          </div>
          <button className="down-button" onClick={()=>{props.setChat(false)  }}></button>
          <div className="input">
            <i className="fas fa-camera" />
            <i className="far fa-laugh-beam" />
            <input placeholder="Type your message here!" type="text" />
            <i className="fas fa-microphone" />
          </div>
        </div>
      </div>
    </div>
  );
}
