import React from "react";
import '../styles/App.scss';

function Messages(props) {
  const { messages, currentMember } = props;

  function renderMessage(message) {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ?
      "Messages-message currentMember" : "Messages-message";
    return (
      <li key={Math.random()} className={className}>
        <span
          className="avatar"
          style={{background: member.clientData.userAvatar}}
        />
        <div className="Message-content">
          <div className="username">
            {member.clientData.username}
          </div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  return (
    <ul className="Messages-list">
      {messages.map(m => renderMessage(m))}
    </ul>
  );
}

export default Messages;
