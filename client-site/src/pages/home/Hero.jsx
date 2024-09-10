import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


import banner1 from '../../assets/ban2.jpg'
import banner2 from '../../assets/ban3.jpg'
import banner3 from '../../assets/ban4.jpg'


const Hero = () => {
  return (
    <div className='overflow-x-hidden'>
      
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            Autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center"  >
                    <div className="w-full md:w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-white text-xl md:text-3xl   mb-2'>"Discover Your Perfect Getaway! Book Your Dream Hotel Today."</h4>
                        {/* <h1 className='text-white text-xl md:text-6xl  px-10 xl:px-28 pb-5 md:pb-10  font-bold '> made of natural or synthetic fibers.</h1> */}
                        <p></p>
                       
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center text-white">
                    <div className="w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-white text-xl md:text-3xl   mb-2'>"Escape to Paradise! Find the Best Deals on Hotels Worldwide."</h4>
                        {/* <h1 className='text-white text-xl md:text-6xl  px-10 xl:px-28 pb-5 md:pb-10  font-bold'> by knitting, crocheting fibers together</h1> */}
                        
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="min-h-[500px] md:h-screen flex items-center text-white">
                    <div className="w-8/12 mx-auto text-center">
                        <h4 className='font-bold text-xl md:text-3xl   text-white mb-2'>"Plan Your Next Adventure! Unlock Exclusive Hotel Offers Now." </h4>
                        
                       
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >
    </div>
);
};

export default Hero;