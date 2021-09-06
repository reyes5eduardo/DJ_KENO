import React from 'react';
import Img from '../../images/image2.jpg';
import {ContactContainer, ContactBg, ImageBg, ContactWrapper, TopLine, ContactH1, ContactP, ContactForm, NameInput, NumberInput, EmailInput, FormButton} from './contactElements';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'djkeno_template', e.target, 'user_0IUBY5fH8WQXPLZKGX3WC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <ContactContainer id="contact">
            <ContactBg>
                <ImageBg src={Img}/>
            </ContactBg>
            <ContactWrapper>
                <ContactForm onSubmit={sendEmail}>
                    <TopLine>Contact</TopLine>
                    <ContactH1>Get in Touch</ContactH1>
                    <ContactP>Reach out for quotes or any questions</ContactP>
                    <NameInput type="text" name="name" placeholder="Name" required/>
                    <NumberInput type="tel" name="phone" placeholder="Phone Number (000-000-0000)" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                    <EmailInput type="email" name="email" placeholder="Email" required/>
                    <FormButton type="submit" value="Submit"/>
                </ContactForm>
            </ContactWrapper>
        </ContactContainer>
    );
};

export default Contact;
