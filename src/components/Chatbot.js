import React from 'react'
import "../styles/Chatbot.css"

export default function Chatbot() {

  return (
    <div className='chat-fixed'>
<div className="center">
    <div className="contacts">
      <i className="fas fa-bars fa-2x" />
      <h2>
        Contacts
      </h2>
      <div className="contact">
        <div className="pic rogers" />
        <div className="badge">
          14
        </div>
        <div className="name">
          Steve Rogers
        </div>
        <div className="message">
          That is America's ass 🇺🇸🍑
        </div>
      </div>
      <div className="contact">
        <div className="pic stark" />
        <div className="name">
          Tony Stark
        </div>
        <div className="message">
          Uh, he's from space, he came here to steal a necklace from a wizard.
        </div>
      </div>
      <div className="contact">
        <div className="pic banner" />
        <div className="badge">
          1
        </div>
        <div className="name">
          Bruce Banner
        </div>
        <div className="message">
          There's an Ant-Man *and* a Spider-Man?
        </div>
      </div>
      <div className="contact">
        <div className="pic thor" />
        <div className="name">
          Thor Odinson
        </div>
        <div className="badge">
          3
        </div>
        <div className="message">
          I like this one
        </div>
      </div>
      <div className="contact">
        <div className="pic danvers" />
        <div className="badge">
          2
        </div>
        <div className="name">
          Carol Danvers
        </div>
        <div className="message">
          Hey Peter Parker, you got something for me?
        </div>
      </div>
    </div>
    <div className="chat">
      <div className="contact bar">
        <div className="pic stark" />
        <div className="name">
          Tony Stark
        </div>
        <div className="seen">
          Today at 12:56
        </div>
      </div>
      <div className="messages" id="chat">
        <div className="time">
          Today at 11:41
        </div>
        <div className="message parker">
          Hey, man! What's up, Mr Stark?&nbsp;👋
        </div>
        <div className="message stark">
          Kid, where'd you come from? 
        </div>
        <div className="message parker">
          Field trip! 🤣
        </div>
        <div className="message parker">
          Uh, what is this guy's problem, Mr. Stark? 🤔
        </div>
        <div className="message stark">
          Uh, he's from space, he came here to steal a necklace from a wizard.
        </div>
        <div className="message stark">
          <div className="typing typing-1" />
          <div className="typing typing-2" />
          <div className="typing typing-3" />
        </div>
      </div>
      <div className="input">
        <i className="fas fa-camera" /><i className="far fa-laugh-beam" /><input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone" />
      </div>
    </div>
  </div>
    </div>
    
  )
}
