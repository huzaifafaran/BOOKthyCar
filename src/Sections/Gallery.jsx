import React from 'react'
import '../styles/home.css'
import { Container,Row,Col } from 'reactstrap'
import Subtitle from '../shared/subtitle'
import ImageGallery from '../image-gallery/ImageGallery'
const Gallery = () => {
  return (
    <>
    <Container>
        <Row>
            <Col lg="12">
                <Subtitle subtitle={"Gallery"}/>
                <h2 className="gallery__title">
                    Visit our Customer's Gallery
                </h2>
                    
            </Col>
            <Col lg="12">
                <ImageGallery/>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Gallery