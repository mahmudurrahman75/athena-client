import React from 'react';
import '../../App.css';
const ServicesDetails = ({service}) => {
    return (
            <div className="col-md-3 text-center ">
                <div className="serviStyle"> 
                <img className="serviceIcon" src={service.image} alt=""/>
                <h5>{service.name}</h5>
                <small>{service.description}</small>
                </div>
            </div>
    );
};

export default ServicesDetails;