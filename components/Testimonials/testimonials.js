import React from 'react';
import {GiMicrophone} from 'react-icons/gi';
import {TestimonialsContainer, TopLine, TestimonialsH1, TestimonialsWrapper, TestimonialCard, TestimonialInfo, Icon, Review, ReviewDate, ReviewName} from './testimonialsElements';

const Testimonials = ({data}) => {
    return (
        <TestimonialsContainer id="testimonials">
            <TopLine>Testimonials</TopLine>
            <TestimonialsH1>What People Are Saying</TestimonialsH1>
            <TestimonialsWrapper>
                {data.map((testimonials, index) => {
                    return (
                        <TestimonialCard key={index}>
                            <TestimonialInfo>
                                <Icon>
                                    <GiMicrophone />
                                </Icon>
                                <Review>{testimonials.review}</Review>
                                <ReviewDate>{testimonials.date}</ReviewDate>
                                <ReviewName>{testimonials.name}</ReviewName>
                            </TestimonialInfo>
                        </TestimonialCard>
                    );
                })}
            </TestimonialsWrapper>
        </TestimonialsContainer>
    );
};

export default Testimonials;
