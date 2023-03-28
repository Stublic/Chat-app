import "../styles/landing.scss";
import logo from "../img/logo.svg";
import avatar1 from "../img/avatar1.svg";
import avatar2 from "../img/avatar2.svg";
import avatar3 from "../img/avatar3.svg";
import { Link } from "react-router-dom";
import { useState} from "react";


const Landing = ({ avatar, username, changeRoomKey }) => {
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length >= 3) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
    username(inputValue);
  };
  return (
    <div id="landing">
      <img className="logo" src={logo} alt="chatty logo" />
      <form className="landing-form">
        <input
          type="text"
          onChange={username}
          placeholder="Choose your Chat name"
          required
        />

        <div className="avatar-box">
          <button
            className={avatar ? "avatar-btn" : "avatar-chosen"}
            onClick={avatar}
          >
            <img id="1" src={avatar1} alt="" />
          </button>
          <button className="avatar-btn" onClick={avatar}>
            <img id="2" src={avatar2} alt="" />
          </button>
          <button className="avatar-btn" onClick={avatar}>
            <img id="3" src={avatar3} alt="" />
          </button>
        </div>
        <Link className="continue-btn" to={"/ChatRoom"}>
            Continue
          </Link>
        {/* {isUsernameValid ? (
          <Link className="continue-btn" to={"/ChatRoom"}>
            Continue
          </Link>
        ) : (
          <button
            className="continue-btn"
            onClick={(e) => {
              e.preventDefault();
              alert("Username must be at least 3 characters long.");
            }}
          >
            Continue
          </button>
        )} */}
        


        <label htmlFor="room-key">
          To start private chatting enter your room key.
        </label>
        <input
          id="room-key"
          placeholder="Enter private room key"
          onChange={changeRoomKey}
        />
      </form>
    </div>
  );
};

export default Landing;
