import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./sidebarElements";

const Sidebar = ({isOpen, toggles}) =>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggles}>
            <Icon onClick={toggles}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggles}>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggles}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggles}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggles}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/contact">
                        Get Quote
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;