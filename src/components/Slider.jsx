import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../styles/Slider.css'


export const Slider = ({ slides }) => {


  return (
    <>
      <Swiper navigation={true} modules={[Navigation]}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img loading='lazy' src={slide.image} alt={slide.name} />
            <p>{slide.quote}</p>
            <h4>{slide.name}</h4>
            <h5>{slide.rol}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

