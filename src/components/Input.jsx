import React, { useState } from "react";
import send from "../img/send.svg";
import emoji from "../img/emoji.svg";
import "../styles/input.scss";

const emojis = [
  "😀",
  "😂",
  "😍",
  "👍",
  "👎",
  "👋",
  "👌",
  "🙌",
  "🤔",
  "💩",
  "❤️",
  "🎉",
];

const Input = ({ onSendMessage }) => {
  const [text, setText] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);
  const [counter, setCounter] = useState(0)

  const onChange = (e) => {
    setText(e.target.value);
    setCounter(text.length)
    if (text.length >= 120) {
      // alert('Previše tipkaš')
      setText(text)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText("");
    onSendMessage(text);
  };

  const onEmojiClick = (emoji) => {
    setText(text + emoji);
  };

  const toggleEmojis = () => {
    setShowEmojis(!showEmojis);
  };
const textLenghtChecker = text.length <= 0
  return (
    <div className="Input">
      <div className="text-counter">
        {
          textLenghtChecker ? ''  : `${counter}/120 words`
        }
        
        </div>
      <form onSubmit={onSubmit}>
        <input
          className="send-input"
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
          disabled={text.length > 120}
        />
        <button className="emoji-btn" type="button" onClick={toggleEmojis}>
          <img className="emoji-svg" src={emoji} alt="send" />
        </button>
        <button className="send-btn" type="submit">
          <img src={send} alt="send" />
        </button>

        {showEmojis && (
          <div className="emoji-picker">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                className="emoji-picker-btn"
                onClick={() => (toggleEmojis(), onEmojiClick(emoji))}
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
