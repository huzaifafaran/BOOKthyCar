import React from 'react'
import './footer.css';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png'


const quick__links =[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
]


const quick__links2 =[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
]



const footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
    <footer className='footer'>
      <Container>
        <Row>
          <Col className="d-flex align-items-center" lg='3'>
          <div className="logo ">
            <img src={logo} alt="" />
            <p>
              At BOOKthyCar, we make car rentals hassle-free and affordable. Whether you're planning a weekend getaway or need a reliable ride for daily commutes, we've got you covered. </p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#' className='mr-2' ><i class="ri-youtube-line"></i></Link>
                <Link to='#'  className='mr-2'><i class="ri-facebook-circle-line"></i></Link>
                <Link to='#' className='mr-2'><i class="ri-instagram-line"></i></Link>
                <Link to='#' className='mr-2'><i  class="ri-twitter-line"></i></Link>

              </span>
            </div>
          </div>
          </Col>
          <Col lg="3" className="boxes">
            <h5 className='footer__link-title'>
              Discover
            </h5>
            <ListGroup className="footer__quick-links ">
              {
                quick__links.map((item,index)=>
                (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg="3"className="boxes">
          
          <h5 className='footer__link-title'>
              Quick Links
            </h5>
            <ListGroup className="footer__quick-links2">
              {
                quick__links2.map((item,index)=>
                (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          
          </Col>
          <Col lg="3"className="boxes">
              <h5 className='footer__link-title'>Contact</h5>
              <ListGroup className="footer__quick-links">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    Address:
                  </h6>
                  <p className="mb-0 ml-2">Karachi, Pakistan</p>

                </ListGroupItem>


                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    Email:
                  </h6>
                  <p className="mb-0 ml-2">k225197@nu.edu.pk</p>

                </ListGroupItem>


                <ListGroupItem className="ps-0 border-0 d-flex align-items-center">
                  <h6 className='mb-0 d-flex  align-items-center gap-2'>
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    
                    Phone:
                  </h6>
                  <p className="mb-0 ml-2 "> +923353501188</p>

                </ListGroupItem>


              </ListGroup>
          </Col>
          <Col lg="12" className="text-center pt-5 ">
          <p className="copyright">
              Copyright {year}, Designed and Developed by Huzaifa Faran. All rights reserved.
          </p>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default footer