import PropTypes from 'prop-types'
import './Navbar.css'
import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../../constants/Constants';

const Navbar = ({navOpenState, closeNav}) => {
    //const [activeLink, setActiveLink] = useState("home");

    const activeNavbarItemBox = useRef(null)
    const activeNavbarItem = useRef(null)

    const navbarItems = [
        {href: "#home", label: "home", menuSize: "all", ref: activeNavbarItem},
        {href: "#portfolio", label: "portfolio", menuSize: "all"},
        {href: "#blog", label: "blog", menuSize: "all"},
        {href: "#contact", label: "contact", menuSize: "all"},
        {href: "#about", label: "about", menuSize: "all"},
        {href: "#login", label: "login", menuSize: "small"}
    ]
    
    const handleNavbarItemClick = () => {
        // update old activeNavbarItem
        activeNavbarItem.current?.classList.remove('text-zinc-900')
        activeNavbarItem.current.classList.add('text-zinc-400')

        // set activeNavbarItem to the new event.target
        activeNavbarItem.current = event.target;
        activeNavbarItem.current.classList.add('text-zinc-900')
        
        activeNavbarItemBox.current.style.left = activeNavbarItem.current.offsetLeft + "px";
        activeNavbarItemBox.current.style.top = activeNavbarItem.current.offsetTop + "px";
        activeNavbarItemBox.current.style.width = activeNavbarItem.current.getBoundingClientRect().width + "px";
        activeNavbarItemBox.current.style.height = activeNavbarItem.current.getBoundingClientRect().height + "px";
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
            
            activeNavbarItemBox.current.style.left = activeNavbarItem.current.offsetLeft + "px";
            activeNavbarItemBox.current.style.top = activeNavbarItem.current.offsetTop + "px";
            activeNavbarItemBox.current.style.width = activeNavbarItem.current.getBoundingClientRect().width + "px";
            activeNavbarItemBox.current.style.height = activeNavbarItem.current.getBoundingClientRect().height + "px";

            if(window.innerWidth > 768){
                closeNav()
            }
        });      

        activeNavbarItem.current.classList.add('text-zinc-900')
        activeNavbarItemBox.current.style.left = activeNavbarItem.current.offsetLeft + "px";
        activeNavbarItemBox.current.style.top = activeNavbarItem.current.offsetTop + "px";
        activeNavbarItemBox.current.style.width = activeNavbarItem.current.getBoundingClientRect().width + "px";
        activeNavbarItemBox.current.style.height = activeNavbarItem.current.getBoundingClientRect().height + "px";

        return () => window.removeEventListener("resize", () => setScreenWidth(window.innerWidth));
    }, [])

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const theme = useContext(ThemeContext)


    return (
        <div className={`navbar-menu ${navOpenState == true && screenWidth < 768 ? (screenWidth < 500 ? 
        (theme.theme == "light" ? 'bg-indigo-500 w-full side-screen-navbar' : 'bg-teal-500 w-full side-screen-navbar') : 
        (theme.theme == "light" ? 'bg-indigo-500 w-44 side-screen-navbar' : 'bg-teal-500 w-44 side-screen-navbar')) : 
        (theme.theme == "light" ? 'bg-indigo-500 mid-screen-navbar' : 'bg-teal-500 mid-screen-navbar')}`}>

            {
                navOpenState == true ?
                    <span className="material-symbols-rounded absolute text-zinc-400 text-3xl top-2 right-2" onClick={() => closeNav()}>close</span>
                : null
            }

            <div ref={activeNavbarItemBox} className='active-navbar-box'></div>

            
            {
                navbarItems
                .filter((item) => (screenWidth < 768 && item.menuSize == "all") || (screenWidth < 768 && item.menuSize == "small") || (screenWidth >= 768 && item.menuSize == "all"))
                .map(({href, label, ref}) => {
                    return <a key={label} href={href} ref={ref} className={`navbar-item ${theme.theme == 'dark' ? 'text-black' : 'text-white'}`} onClick={() => handleNavbarItemClick(label)}>{label}
                    </a>
                })
            }

        </div>
    )
}

Navbar.propTypes = {
    navOpenState: PropTypes.bool.isRequired,
    closeNav: PropTypes.func.isRequired
}

export default Navbar;