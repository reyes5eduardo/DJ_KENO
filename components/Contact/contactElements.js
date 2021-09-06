import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0, 0, 0,0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const ContactBg = styled.div`
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ContactWrapper = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);

  @media screen and (max-width: 768px){
    max-width: 500px;
  }

  @media screen and (max-width: 480px){
    width: 350px;
  }
`;

export const TopLine = styled.div`
  color: var(--pink);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ContactH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const ContactP = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 45px;

  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`;

export const ContactForm = styled.form`
  width: 600px;
  height: 550px;
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px){
    max-width: 500px;
  }

  @media screen and (max-width: 480px){
    width: 350px;
  }
`;

export const NameInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 70%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: var(--grey-white);
  font-size: 1rem;
  margin-bottom: 16px;

  &:focus {
    display: inline-block;
    //box-shadow: 0 0 0 0.2rem var(--pink);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const NumberInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 70%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: var(--grey-white);
  font-size: 1rem;
  margin-bottom: 16px;

  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const EmailInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 70%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: var(--grey-white);
  font-size: 1rem;
  margin-bottom: 16px;

  &:focus {
    display: inline-block;
    //box-shadow: 0 0 0 0.2rem var(--pink);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const FormButton = styled.input`
  border-radius: 50px;
  width: 70%;
  background: ${({primary}) => (primary ? '#010606' : '#E02B64')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  transition: all 0.2s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &:hover{
    background: ${({primary}) => (primary ? '#E02B64' : '#fff')};
    color: var(--pink);
  }
`;
