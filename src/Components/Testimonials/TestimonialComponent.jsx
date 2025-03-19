import React from 'react'
import Slider from 'react-slick'
import a1 from '../../assets/images/ava-01.jpg'
import a2 from '../../assets/images/ava-03.jpg'
import a3 from '../../assets/images/ava-02.jpg'
import a4 from '../../assets/images/ava-04.jpg'


const TestimonialComponent = () => {
  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,
    responsive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }
        }
    ]
  }
    return (
    <>
    
    <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>
            "BOOKthyCar made my business trip seamless! The car was in excellent condition, the booking process was effortless, and the customer support was fantastic. Highly recommended!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={a1} className='w-25 h-25 rounded' alt="Customer" />
            <div>
                <h6 className='mb-0 mt-3'>Michael Carter</h6>
                <p>Frequent Traveler</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            "I’ve used many car rental services, but BOOKthyCar stands out with its affordable rates and well-maintained cars. I felt completely safe and comfortable throughout my journey."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={a2} className='w-25 h-25 rounded' alt="Customer" />
            <div>
                <h6 className='mb-0 mt-3'>Rameela Qaiser</h6>
                <p>Solo Traveler</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            "Exceptional service! The car was delivered on time, the staff was courteous, and the entire experience was smooth. I’ll definitely be using BOOKthyCar for all my future trips."
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={a3} className='w-25 h-25 rounded' alt="Customer" />
            <div>
                <h6 className='mb-0 mt-3'>Angela Richardson</h6>
                <p>Business Professional</p>
            </div>
        </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>
            "Superb experience from start to finish! The booking was quick, the car was spotless, and the entire process was hassle-free. Can’t wait to book again!"
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={a4} className='w-25 h-25 rounded' alt="Customer" />
            <div>
                <h6 className='mb-0 mt-3'>Gurero Martinez</h6>
                <p>Weekend Explorer</p>
            </div>
        </div>
    </div>
</Slider>

    </>
  )
}

export default TestimonialComponent