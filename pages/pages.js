import React, {useState} from "react";
import Sidebar from "../components/Sidebar/sidebar";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Home/home";
import Info from "../components/Info/info";
import {homeObjOne, homeObjTwo} from "../components/Info/data";
import Socials from "../components/Socials/socials";
import Services from "../components/Services/services";
import {servicesData, testimonialsData} from "../components/Services/Data";
import Testimonials from "../components/Testimonials/testimonials";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";

const Home = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const toggles = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggles={toggles}/>
            <Navbar toggles={toggles}/>
            <Hero />
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Socials />
            <Services data={servicesData}/>
            <Testimonials data={testimonialsData}/>
            <Contact />
            <Footer />
        </>
    );
};

export default Home;