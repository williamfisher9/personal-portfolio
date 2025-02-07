import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    const [navOpenState, setNavOpenState] = useState(false);

    const closeNav = () => {
        setNavOpenState(false)
    }
    
    return (
        <div className="w-full h-20 mt-4 flex items-center justify-between px-10">
            <a href='/'>
                <img src='favicon.png' className='size-16' alt='logo-image' />
            </a>

            <span className="material-symbols-rounded" onClick={() => setNavOpenState(prev => !prev)}>{!navOpenState ? 'menu' : 'close'}</span>

            <Navbar navOpenState={navOpenState} closeNav={closeNav}/>

            <button className='header-btn'>LOGIN</button>
        </div>
    )
}

export default Header
