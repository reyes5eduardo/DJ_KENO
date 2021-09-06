import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: var(--white);
`;

export const TopLine = styled.p`
  color: var(--pink);
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 16px;

`;

export const ServicesH1 = styled.h1`
  margin-bottom: 24px;
  font-size:48px;
  line-height:1.1;
  font-weight:600;
  text-align: center;
  color: var(--light-black);

  @media screen and (max-width:480px){
    font-size: 32px;
  }
`;

export const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ServiceCard = styled.div`
  margin:0 2rem;
  line-height: 2;
  width: 300px;
  padding-top: 25px;

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceImg = styled.img`
  height: 300px;
  width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px var(--pink);
`;

export const ServiceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ServiceTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;