import React from "react";
import Video from '../../../../dj-v4/src/videos/video-1.mp4';
import {HeroContainer, HeroBg, HeroContent, HeroH1, HeroP} from "./homeElements";

const Hero = () =>{
    return(
        <HeroContainer id='home'>
            <HeroBg>
                <video autoPlay loop muted playsInline="true" disablePictureInPicture="true" style={{width: "100%", height: "100%", objectFit: "cover" }}>
                    <source src={Video} type='video/mp4'/>
                </video>
            </HeroBg>
            <HeroContent>
                <HeroH1>DJ KENO</HeroH1>
                <HeroP>Open format DJ based in Austin TX!</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;