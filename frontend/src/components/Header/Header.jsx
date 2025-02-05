import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    const [navOpenState, setNavOpenState] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
            if(window.innerWidth > 768){
                setNavOpenState(false)
            }
        });
        // to perform cleanup after component tear down
        return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, []);

    return (
        <div className="w-full h-20 mt-4 flex items-center justify-between px-14 relative">
            <a href='/'>
                <img src='favicon.png' className='size-16' alt='logo-image' />
            </a>

            <span className="material-symbols-rounded" onClick={() => setNavOpenState(prev => !prev)}>{!navOpenState ? 'menu' : 'close'}</span>

            <Navbar navOpenState={navOpenState} screenWidth={screenWidth}/>

            <button className='header-btn'>LOGIN</button>
        </div>
    )
}

export default Header
