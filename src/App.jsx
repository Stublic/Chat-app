import ChatRoom from "./components/ChatRoom";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState} from "react";


const App = () => {
  const [avatar, setAvatar] = useState(null);
  const chooseAvatar = (e) => {
    e.preventDefault();
    setAvatar(e.target.id);
    
  };

  const [username, setUsername] = useState('');
  const chooseUsername = (e) => {
    const inputValue = e.target.value;
    setUsername(inputValue);
  };

  const [roomKey, setRoomKey] = useState("HqVh5PNTIXiwwd2v");
  const changeRoomKey = (e) => {
    const inputValue = e.target.value;
    console.log(inputValue);
    setRoomKey(inputValue);
  };

  return (
    <Router>
      <div className="landing">
        <Routes>
          <Route
            exact path="/"
            element={
              <Landing
                avatar={chooseAvatar}
                username={chooseUsername}
                changeRoomKey={changeRoomKey}
              />
            }
          />
          <Route
            path="/ChatRoom"
            element={
              <ChatRoom 
                avatar={avatar} 
                username={username} 
                roomKey={roomKey}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
