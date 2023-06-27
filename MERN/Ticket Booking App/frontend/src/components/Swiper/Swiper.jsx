import React from 'react';

//Swiper css
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';

//import images
import img1 from '../../utils/swiperImages/img-1.jpg';
import img2 from '../../utils/swiperImages/img-2.jpg';
import img3 from '../../utils/swiperImages/img-3.jpg';
import img4 from '../../utils/swiperImages/img-4.jpg';

const SwiperGallery = () => {
  const images = [img1, img2, img3, img4];
  const styles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  return (
    <>
      <Swiper
        style={{
          marginTop: '11vh',
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log('Slide Change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              style={styles}
              className="swiperimages"
              src={image}
              alt="swiperImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperGallery;
