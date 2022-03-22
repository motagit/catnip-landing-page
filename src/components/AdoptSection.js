import React from 'react'
import './AdoptSection.scss'
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AdoptCard } from "./pages/HomePage/AdoptData.js";

function AdoptSection() {
  return (
    <>
    <img src="/images/svg-retangulo.svg" alt="" style={{width: '100%',marginTop: '-300px', marginBottom: '-10px'}}/>
        <div className='adopt-section' id='adopt'>
            <div className="container">
                <div className="row adopt-row">
                    <h1 className='heading'>How to Adopt</h1>
                </div>
            </div>
            <div className="container-slides">
                <div className="row swiper-row">
                    <Swiper
                        modules={[Navigation]}
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
                        spaceBetween={30}
                        navigation={true}
                        slidesPerView='auto'
                        className="mySwiper"
                    >

                    {AdoptCard.map(card => 
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
    <img src="/images/svg-retangulo-baixo.svg" alt="" style={{width: '100%',marginTop: '-10px'}}/>
    </>
  )
}

export default AdoptSection