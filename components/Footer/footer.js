import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink,FooterSocialLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRight, SocialIcons, SocialIconLink} from './footerElements'
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter} from "react-icons/all";
import {animateScroll as scroll} from "react-scroll";

const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="about">About</FooterLink>
                            <FooterLink to="discover">Discover</FooterLink>
                            <FooterLink to="testimonials">Testimonials</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Services</FooterLinkTitle>
                            <FooterLink to="services">Night Life</FooterLink>
                            <FooterLink to="services">Weddings</FooterLink>
                            <FooterLink to="services">Celebrations</FooterLink>
                            <FooterLink to="services">Private Events</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="contact">Contact</FooterLink>
                            <FooterLink to="contact">Support</FooterLink>
                            <FooterLink to="contact">Sponsorship</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterSocialLink href="https://www.facebook.com/DJkenohhbee/">Facebook</FooterSocialLink>
                            <FooterSocialLink href="https://www.instagram.com/_djkeno/">Instagram</FooterSocialLink>
                            <FooterSocialLink href="https://www.youtube.com/user/jhoose0123/featured">YouTube</FooterSocialLink>
                            <FooterSocialLink href="https://twitter.com/kid_dean">Twitter</FooterSocialLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            DJ KENO
                        </SocialLogo>
                        <WebsiteRight>DJ KENO Copyright &copy; {new Date().getFullYear()}All rights reserved</WebsiteRight>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/DJkenohhbee/" targ="_blank" aria-label="Facebook">
                                <FaFacebookF />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/_djkeno/" targ="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.youtube.com/user/jhoose0123/featured" targ="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/kid_dean" targ="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
