import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import Subtitle from '../shared/subtitle'
import TestimonialComponent from '../Components/Testimonials/TestimonialComponent'
const Testimonials = () => {
  return (
    <>
    <Container>
        <Row>
            <Col lg="12">
                <Subtitle subtitle={"Testimonials"}/>
                <h2 className="testimonial__title">
                    What our Customers say
                </h2>
    
            </Col>

            <Col lg="12">
            <TestimonialComponent/>
            </Col>
        </Row>
    </Container>

    </>
    
  )
}

export default Testimonials