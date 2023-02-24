import './styles/App.scss';
import Messages from "./components/Messages";
import { useState, useEffect } from "react";
import Input from './components/Input';
import Landing from './components/Landing';

function App() {
  function randomName() {
    const adjectives = ["jura", "jura"];
    const nouns = [" pura", " pura"];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return adjective + noun;
  }
  
  function randomAvatar() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }
  



  const onSendMessage = (message) => {
    // const newMessage = {
    //   text: message,
    //   member: member
    // };
    // setMessages(prevMessages => [...prevMessages, newMessage]);
    // const drone = new window.Scaledrone("eAntdYVNkdXkWT7d");
    drone.publish({
      room: "observable-room",
      message
    });
  };
  
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();
  const [member, setMember] = useState({
    username: randomName(),
    userAvatar: randomAvatar(),
    id: ""
  });

  
  useEffect(() => {

  }, [messages])
  useEffect(() => {
    const drone = new window.Scaledrone("eAntdYVNkdXkWT7d", {
      data: member
    });
    setDrone(drone);
  }, [])
  useEffect(() => {
    // const drone = new window.Scaledrone("eAntdYVNkdXkWT7d", {
    //   data: member
    // });
    if (drone) {
      
      const room = drone.subscribe("observable-room");
       drone.on('open', error => {
      if (error) {
        console.error(error);
      }
      // setMember(prevMember => ({...prevMember, id: drone.clientId}));
      setMember({...member, id: drone.clientId});

    });

    

    room.on('data', (data, member) => {
      console.log(member);
      // setMessages(prevMessages => [...prevMessages, {member, text: data}]);
      setMessages((prevArray) => [...prevArray, {member, text: data}])
    });
    
    return () => {
      drone.close();
    };
    }
  }, [drone]);




 
  

  return (
    // <div className='App'>
    //   <div className="App-header">
    //     <h1>Chatty</h1>
    //   </div>
    //   <Messages 
    //     messages={messages}
    //     currentMember={member}
    //   />
    //   <Input
    //     onSendMessage={onSendMessage}
    //   />
    // </div>
    <Landing />
  )
}

export default App;

