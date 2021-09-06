import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #2b5876;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2b5876, #4e4376);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2b5876, #4e4376); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

export const TestimonialsH1 = styled.h1`
  margin-bottom: 24px;
  font-size:48px;
  line-height:1.1;
  font-weight:600;
  text-align: center;
  color: var(--white);

  @media screen and (max-width: 480px){
    font-size: 32px;
  }
`;

export const TestimonialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 25px;
  margin: 0 auto;
`;

export const TestimonialCard = styled.div`
  margin:0 2rem;
  line-height: 2;
  width: 300px;
  max-width: 100%;
  padding-top: 25px;
  background: var(--pink);

  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px){
    width: 500px;
    margin-bottom: 15px;
  }
`;

export const Icon = styled.div`
  color: var(--white);
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const Review = styled.p`
  color: var(--white);
  text-align: center;
  margin-bottom: 16px;
`;

export const ReviewDate = styled.p`
  color: var(--white);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.4px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
`;

export const ReviewName = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: var(--white);
  margin-bottom: 10px;
`;