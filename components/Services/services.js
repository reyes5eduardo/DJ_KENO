import React from 'react';
import {ServicesContainer, TopLine, ServicesH1, ServicesWrapper, ServiceCard, ServiceImg, ServiceInfo, ServiceTitle} from './servicesElements';

const Services = ({data}) => {
    return (
        <ServicesContainer id="services">
            <TopLine>Services</TopLine>
            <ServicesH1>Entertainment For Any Event</ServicesH1>
            <ServicesWrapper>
                {data.map((services, index) => {
                    return (
                        <ServiceCard key={index}>
                            <ServiceImg src={services.img} alt={services.alt}/>
                            <ServiceInfo>
                                <ServiceTitle>{services.name}</ServiceTitle>
                            </ServiceInfo>
                        </ServiceCard>
                    );
                })}
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
