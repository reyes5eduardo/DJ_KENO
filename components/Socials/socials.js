import React from 'react';
import Img from '../../images/image7.jpg';
import {SocialsContainer, SocialsBg, ImageBg, SocialsWrapper,TopLine, SocialsH1, SocialsCards, Cards, Icon} from "./socialsElements";
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter} from "react-icons/all";

const Socials = () => {
    return (
        <SocialsContainer id="socials">
            <SocialsBg>
                <ImageBg src={Img}/>
            </SocialsBg>
            <SocialsWrapper>
                <TopLine>Socials</TopLine>
                <SocialsH1>Follow DJ KENO</SocialsH1>
                <SocialsCards>
                    <Cards href="https://www.facebook.com/DJkenohhbee/">
                        <Icon>
                            <FaFacebookF />
                        </Icon>
                    </Cards>
                    <Cards href="https://www.instagram.com/_djkeno/">
                        <Icon>
                            <FaInstagram />
                        </Icon>
                    </Cards>
                    <Cards href="https://www.youtube.com/user/jhoose0123/featured">
                        <Icon>
                            <FaYoutube />
                        </Icon>
                    </Cards>
                    <Cards href="https://twitter.com/kid_dean">
                        <Icon>
                            <FaTwitter />
                        </Icon>
                    </Cards>
                </SocialsCards>
            </SocialsWrapper>
        </SocialsContainer>
    );
};

export default Socials;
