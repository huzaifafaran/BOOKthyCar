import React from 'react'
import { Container,Row,Col } from 'reactstrap'
import manPointing from '../assets/images/man-pointing.png'
const NewsLetter = () => {
  return (
    <>
    <Container>
        <Row>
            <Col lg="7">
                <div className="newsletter__content">
                    <h2>
                        Subscribe to get the latest Updates!
                    </h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn newsletter__btn'style={{ color: "#fff" }}>Subscribe</button>
                    </div>
                    <p>
                    Get exclusive updates on the latest car rental deals, special offers, and travel tips—straight to your inbox!

</p>
                </div>
            </Col>
            <Col lg="5">
            <div className="newsletter__img">
                <img src={manPointing} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default NewsLetter