import "../styles/app.scss";
import defaultAvatar from "../img/avatar1.svg";

function Messages(props) {
  const { messages, currentMember, activeAvatar } = props;

  function renderMessage(message) {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "Messages-message currentMember"
      : "Messages-message";

    return (
      <li key={Math.random()} className={className}>
        <img
          className="avatar"
          src={activeAvatar ? activeAvatar : defaultAvatar}
          alt=""
        />
        <div className="Message-content">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  return (
    <div className="Messages-list-wrap">
      <ul className="Messages-list">{messages.map((m) => renderMessage(m))}</ul>
    </div>
  );
}

export default Messages;
