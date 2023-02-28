
import React, { useState } from "react";
import send from '../img/send.svg';
import emoji from '../img/emoji.svg';
import '../styles/Input.scss'


const emojis = ["😀", "😂", "😍", "👍", "👎", "👋", "👌", "🙌", "🤔", "💩", "❤️", "🎉"];

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };

  const onEmojiClick = emoji => {
    setText(text + emoji);
  };

  const toggleEmojis = () => {
    setShowEmojis(!showEmojis);
  };
  

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          className="send-input"
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <button className="emoji-btn" type="button" onClick={toggleEmojis}>
        <img className="emoji-svg" src={emoji} alt="send" />
        </button>
        <button className="send-btn"  type="submit">
          <img src={send} alt="send" />
        </button>
        
        {showEmojis && (
          <div className="emoji-picker">
            {emojis.map(emoji => (
              <button
                key={emoji}
                className="emoji-picker-btn"
                onClick={() => (toggleEmojis(),onEmojiClick(emoji))}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default Input;
