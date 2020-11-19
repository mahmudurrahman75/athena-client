import React from 'react';
import '../../App.css';

// image 

import image1 from '../../image/service1.png';
import image2 from '../../image/service2.png';
import image3 from '../../image/service3.png';
import image4 from '../../image/service4.png';
import ServicesDetails from './ServicesDetails';

const Services = () => {
    const whatWeDo = [
        {
            name: "Experience Design",
            description: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
            image: image1

        },
        {
            name: "Interface Design",
            description: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
            image: image2
        },
        {
            name: "Prototyping",
            description: "The point of using Lorem Ipsum is that it has a more-or-less normal.",
            image: image3
        },
        {
            name: "Illustration",
            description: "The point of using LoremIpsum is that it has a more-or-lessnormal.",
            image: image4

        }
    ]
    return (
        <div className="container">
            <div className="servicesBG">
                <div className="text-center pt-5">
                    <h2>What We Do</h2>
                    <p>Our main focus is to make the User Experience very <br /> simple and easy. Simplicity is our Strength.</p>
                </div>

                <div className="row pt-5">
                    {
                         whatWeDo.map(service => <ServicesDetails service={service} key={service.name}></ServicesDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;