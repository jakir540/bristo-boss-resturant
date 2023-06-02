import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

  return (
    <div>
    <SectionTitle 
    subHeading="What Our Clients Say"
    heading="Testimonial"
    
    ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews.map(review =><SwiperSlide key={review._id}>

                <div>
            <p>{review.details}</p>
            <p>{review.name}</p>

            </div>
            </SwiperSlide>)   }
            
{/*             
            <SwiperSlide key={review._id}>

            <div>
            <p>{review.details}</p>
            <p>{review.name}</p>

            </div>
        </SwiperSlide>) */}
     
      </Swiper>
    </div>
  );
};

export default Testimonial;
