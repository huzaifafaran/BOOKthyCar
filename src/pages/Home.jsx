import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg2 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import carImg from '../assets/images/car.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../Components/FeaturedTours/FeaturedTourList'


import Gallery from '../Sections/Gallery'
import Testimonials from '../Sections/Testimonials'
import NewsLetter from '../Components/NewsLetter'

const home = () => {
  return (
    <>

    {/*======================== hero section start ======================== */}
    
    <section>
      <Container>
        <Row>
          <Col lg="6">
          <Col lg="11">
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Satisfaction Guranteed!'} />
              <img src={carImg} alt=""/>
            </div>
            <h1>Travel without limits, explore without <span className="highlight">worries.
              </span>
            </h1>
            <p>
            Discover a seamless car booking experience tailored for your adventures. Whether it’s a road trip, a city tour, or a business journey, we’ve got the perfect ride for you.

            </p>
          </div>
          
          </Col>
          </Col>
          <Col lg="2">
          <div className="hero__img-box">
            <img src={heroImg} alt="hero image"/>
          </div>
          </Col>

          <Col lg="2">
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="video" autoPlay loop muted />
          </div>
          </Col>

          <Col lg="2">
          <div className="hero__img-box mt-5">
            <img src={heroImg2} alt="second hero image"/>
          </div>
          </Col>
          <SearchBar/>
          
        </Row>
      </Container>
      </section>
      
    {/*======================== hero section end ======================== */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">Our Services</h5>
            <h2 className="services__title">We are the best in the business</h2>

          </Col>
          <ServiceList/>
        </Row>

      </Container> 
    </section>  
    
    
    {/*======================== featured Tours start ======================== */}

    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">
              Our Featured Cars
            </h2>
          </Col>
          <FeaturedTourList/>
        </Row>
      </Container>
    </section>
    {/*======================== featured Tours end ======================== */}


    {/*======================== Exp start ======================== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>
              Experience the Best with BOOKthyCar
 
              </h2>

              <p>
              At BOOKthyCar, we bring years of expertise to offer you the smoothest, most reliable car booking experience. Whether you're looking for a luxury ride, a daily commute, or a long road trip, we've got you covered.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Stories</h6>
              </div>

              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>

              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/*======================== Exp end ======================== */}

    <section>
      <Gallery/>
    </section>

    <section>
      <Testimonials/>
    </section>


    <section className='newsletter'>
      <NewsLetter/>
    </section>







    </>
  )
}

export default home