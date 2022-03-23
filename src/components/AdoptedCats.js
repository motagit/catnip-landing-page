import React from 'react'
import './AdoptedCats.scss'
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cats } from "./pages/HomePage/CatsData";

function AdoptedCats() {
  return (
    <>
        <div className='cats-section' id='adopt'>
            <div className="container">
                <div className="row">
                    <h1 className='heading'>Adopted Cats</h1>
                </div>
            </div>
            <div className="cats-container-slides">
                <div className="row swiper-row">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1090: {
                                slidesPerView: 3,
                            },
                            1550: {
                                slidesPerView: 4,
                            }
                        }}
                        pagination={{
                            dynamicBullets: true,
                          }}
                        spaceBetween={30}
                        navigation={true}
                        slidesPerView='auto'
                        className="mySwiper"
                    >

                    {cats.map(card => 
                        <SwiperSlide>
                            <div className="card">
                                <img src={card.imgSrc} alt={card.imgAlt}/>
                                <h1>{card.headLine}</h1>
                                <p class="text">{card.description}</p>
                            </div>
                        </SwiperSlide>
                    )}
                    </Swiper>

                    
                </div>

            </div>
        </div>
    </>
  )
}

export default AdoptedCats