import './styles/App.scss';
import Messages from "./components/Messages";
import { useState, useEffect } from "react";
import Input from './components/Input';

function App() {
  function randomName() {
    const adjectives = ["jura", "jura"];
    const nouns = [" pura", " pura"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
    id: ""
  });


  
  useEffect(() => {
    const drone = new window.Scaledrone("E0eB7uflNWyk4slg", {
      data: member
    });
    setDrone(drone);
  }, [])
  useEffect(() => {
    const drone = new window.Scaledrone("E0eB7uflNWyk4slg", {
      data: member
    });



    if (drone) {
       drone.on('open', error => {
      if (error) {
        console.error(error);
      }
      setMember(prevMember => ({...prevMember, id: drone.clientId}));
    });

    const room = drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, {member, text: data}]);
    });
    
    return () => {
      drone.close();
    };
    }
  }, [drone]);




 
  const onSendMessage = (message) => {
    const newMessage = {
      text: message,
      member: member
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    const drone = new window.Scaledrone("JrXoRFRFtubpZybj");
    drone.publish({
      room: "observable-room",
      message
    });
  };

  return (
    <div className='App'>
      <div className="App-header">
        <h1>Chatty</h1>
      </div>
      <Messages 
        messages={messages}
        currentMember={member}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </div>
  )
}

export default App;

