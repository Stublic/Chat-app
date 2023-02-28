import '../styles/App.scss';
import Messages from "../components/Messages";
import { useState, useEffect } from "react";
import Input from '../components/Input';
import loader from '../img/loader.svg'
import logo from '../img/logo.svg'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'

function ChatRoom({avatar, username, roomKey}) {
    //avatar

    const [activeAvatar, setActiveAvatar] = useState(avatar);

      useEffect(() => {
        if(avatar == 1){
                setActiveAvatar(avatar1)
                }else if(avatar == 2){
                  setActiveAvatar(avatar2)

                }else if(avatar == 3){
                  setActiveAvatar(avatar3)

                }
      }, [])



     //loading screen
     const [showLoadingScreen, setShowLoadingScreen] = useState(true);

     useEffect(() => {
       // Use setTimeout to hide the loading screen after 2 seconds
       const timeout = setTimeout(() => {
         setShowLoadingScreen(false);
       }, 1000);
   
       // Clear the timeout when the component unmounts to avoid memory leaks
       return () => clearTimeout(timeout);
     }, []);

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
    username: username,
    userAvatar: activeAvatar,
    id: ""
  });

  

  
  useEffect(() => {

  }, [messages])
  useEffect(() => {
    const drone = new window.Scaledrone(roomKey, {
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
    <>
    {
         showLoadingScreen ?
                <div className='loader'>
                    <img src={loader} alt="loading" />
                </div> :
    <div className='App'>
      <div className="App-header">
        <img className='logo' src={logo} alt="" />
         <div className='active-users'>
        {activeAvatar &&
       
            <img className='header-avatar' src={activeAvatar} alt="" />
            
      
        }  </div>
        
      </div>
      <Messages 
        messages={messages}
        currentMember={member}
        activeAvatar={activeAvatar}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </div>}
    </>
      
  )
}

export default ChatRoom;

