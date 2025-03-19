import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';


import flashImg from '../assets/images/flash.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';


const servicesData = [
    {
        imgUrl:flashImg,
        title:"Instant Car Booking",
        desc: "Choose from a variety of vehicles and book in seconds.",
    },
    {
        imgUrl:guideImg,
        title:"Smart Route Assistance",
        desc: "Get optimized routes and avoid unnecessary delays.",
    },
    {
        imgUrl:customizationImg,
        title:"Customizable Rides",
        desc: "Select cars that fit your style, comfort, and budget.",
    },

]
const ServiceList = () => {
    return (
      <>
        {servicesData.map((item, index) => (
          <Col lg="3" key={index}>
            <ServiceCard item={item} />
          </Col>
        ))}
      </>
    );
  };
  

export default ServiceList