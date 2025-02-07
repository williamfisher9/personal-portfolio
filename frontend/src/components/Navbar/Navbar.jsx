import PropTypes from 'prop-types'
import './Navbar.css'
import { useEffect, useRef, useState } from 'react';

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


    return (
        <div className={`navbar-menu ${navOpenState == true && screenWidth < 768 ? 'side-screen-navbar' : 'mid-screen-navbar'}`}>
            <div ref={activeNavbarItemBox} className='active-navbar-box'></div>
            {
                navbarItems
                .filter((item) => (screenWidth < 768 && item.menuSize == "all") || (screenWidth < 768 && item.menuSize == "small") || (screenWidth >= 768 && item.menuSize == "all"))
                .map(({href, label, ref}) => {
                    return <a key={label} href={href} ref={ref} className={`navbar-item text-zinc-400`} onClick={() => handleNavbarItemClick(label)}>{label}
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