import styled from "styled-components";

export const SocialsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
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

export const SocialsBg = styled.div`
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

export const SocialsWrapper = styled.div`
  z-index: 3;
  max-width: 1300px;
  margin: 0;
  position: absolute;
  padding: 0 50px;
  align-items: center;
`;

export const TopLine = styled.div`
  color: var(--pink);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`;

export const SocialsH1 = styled.h1`
  color: var(--white);
  font-size: 48px;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: 768px){
    font-size: 40px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 480px){
    font-size: 32px;
    margin-bottom: 5px;
  }
`;

export const SocialsCards = styled.div`
  max-width: 1200px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;

  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const Cards = styled.a`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  width: 240px;
  height: 150px;
  margin: auto;
  color: var(--grey-white);
  font-size: 2.5rem;
  text-align: center;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:focus {
    display: inline-block;
    //box-shadow: 0 0 0 0.2rem var(--pink);
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    color: var(--pink);
  }
  
  @media screen and (max-width: 768px){
    width: 180px;
    height: 120px;
    font-size: 2rem;
    text-align: center;
    padding: 50px 0;
  }
`;

export const Icon = styled.div`
  height: 100%;
  width: 100%;
`;
