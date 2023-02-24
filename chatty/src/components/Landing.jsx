import '../styles/Landing.scss'
import logo from '../img/logo.svg'
import banner from '../img/chooseNAme.png'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import {useState} from 'react';

const Landing = () => {
    const [avatar, setAvatar] = useState(true)
    const chooseAvatar = (e) =>{
        e.preventDefault()

    }
    return ( 
        <>
            {/* <img className='logo' src={logo} alt="chatty logo" /> */}
            <form className='landing-form'>
                <input type="text" placeholder='Choose your Chat name' />
                <div className='avatar-box'>
                    <button 
                    className={avatar ? 'avatar-chosen' : 'avatar-btn'}
                    onClick={chooseAvatar}
                    
                    >
                        <img src={avatar1} alt="" />
                    </button>
                    <button className='avatar-btn' onClick={(e) => chooseAvatar(e)}>
                        <img src={avatar2} alt="" />
                    </button>
                    <button className='avatar-btn' onClick={chooseAvatar}>
                        <img src={avatar3} alt="" />
                    </button>
                </div>
                <button className='continue-btn'>Continue</button>
            </form>
            <img className='banner' src={banner} alt="" />
        </>
     );
}
 
export default Landing;