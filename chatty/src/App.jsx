import ChatRoom from "./components/ChatRoom";
import Landing from "./components/Landing";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import {useState, useEffect} from 'react';


const App = () => {

  const [avatar, setAvatar] = useState(null)

  const chooseAvatar = (e) => {
    e.preventDefault()
    e.persist();
    setAvatar(e.target.id);
    console.log(avatar);
  };

  const [username, setUsername] = useState(null)
    const chooseUsername = (e) =>{
      const inputValue = e.target.value
      
        setUsername(inputValue);

    }
    const [roomKey, setRoomKey] = useState("eAntdYVNkdXkWT7d")
  const changeRoomKey = (e) =>{
    const inputValue = e.target.value;
    console.log(inputValue);
    setRoomKey(inputValue)



  }
  return ( 
    <Router>
      <div className='landing'>
        <Routes>

        <Route 
          exact path="/" element={<Landing
            avatar={chooseAvatar} 
            username={chooseUsername}
            changeRoomKey={changeRoomKey} />}
          />
        <Route 
          path='/ChatRoom' element={<ChatRoom
            avatar={avatar}
            username={username}
            roomKey={roomKey} />}
          />
        </Routes>
      
    </div>
    </Router>
    
   );
}
 
export default App;