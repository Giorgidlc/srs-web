import pkg from 'prop-types';
const {PropTypes} = pkg;
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/Slider.css'


export const Slider = ({slides}) => {


  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
      {slides.map((slide) => ( 
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.name} />
            <p>{slide.quote}</p>
            <h4>{slide.name}</h4>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,

};