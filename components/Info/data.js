import Img1 from '../../images/image1.jpeg';
import Img2 from '../../images/image3.jpg';

export const homeObjOne ={
    id: 'about',
    lightBG: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About',
    headline: 'Meet DJ KENO',
    description: 'Passion for music has always been there since as long as I can remember, but it was while in ' +
        'college that I found a way to share that passion with everyone else in a fun way! I have been able ' +
        'to entertain a crowd ever since.',
    // buttonLabel: 'Get Quote',
    imgStart: false,
    img: Img1,
    alt: 'dj',
    // dark: false,
    // primary: true,
    darkText: false
}

export const homeObjTwo ={
    id: 'discover',
    lightBG: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Discover',
    headline: 'See DJ KENO live',
    description: 'Come out to one of my shows and lets have fun together! ' +
        'You can see me at your local bar and club, I do shows in Austin, San Marcos and surrounding areas. ' +
        'Follow me on social media to see where I will be playing next.',
    // buttonLabel: 'Follow DJ KENO',
    imgStart: true,
    img: Img2,
    alt: 'Car',
    // dark: false,
    // primary: false,
    darkText: true
}
