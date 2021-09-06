import React, {useEffect, useState} from "react";
import {FaBars} from 'react-icons/fa';
import Img from '../../images/logo.png';
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll";
import {Nav, NavbarContainer, NavLogo, Logo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./navbarElements";

const Navbar = ({toggles}) =>{
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return(
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}><Logo src={Img}/>DJ KENO</NavLogo>
                        <MobileIcon onClick={toggles}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="contact">Get Quote</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
