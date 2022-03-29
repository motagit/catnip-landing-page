import React from 'react'
import './AdoptedCats.scss'
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
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
                        modules={[Pagination, Autoplay]}
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
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={30}
                        centeredSlides={true}
                        slidesPerView='auto'
                        className="mySwiper"
                    >

                    {cats.map(card => 
                        <SwiperSlide>
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + card.imgSrc} alt={card.imgAlt}/>
                                <h1>{card.name}</h1>
                                <small>Adopted with {card.age}</small>
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