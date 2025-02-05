import PropTypes from 'prop-types'
import './Navbar.css'
import { useEffect, useState } from 'react';

const Navbar = ({navOpenState, screenWidth}) => {
    const navbarItems = [
        {href: "#home", label: "home", menuSize: "all"},
        {href: "#portfolio", label: "portfolio", menuSize: "all"},
        {href: "#blog", label: "blog", menuSize: "all"},
        {href: "#login", label: "login", menuSize: "small"}
    ]

    const [activeLink, setActiveLink] = useState("home");

    return (
        <div className={navOpenState == true && screenWidth < 768 ? 'side-screen-navbar' : 'mid-screen-navbar'}>
            {
                navbarItems
                .filter((item) => (screenWidth < 768 && item.menuSize == "all") || (screenWidth < 768 && item.menuSize == "small") || (screenWidth >= 768 && item.menuSize == "all"))
                .map(({href, label}) => {
                    return <a key={label} href={href} className={activeLink == label ? 'active-navbar-item' : 'navbar-item'} onClick={() => {setActiveLink(label)}}>{label}</a>
                })
            }

        </div>
    )
}

Navbar.propTypes = {
    navOpenState: PropTypes.bool.isRequired,
    screenWidth: PropTypes.number.isRequired
}

export default Navbar;