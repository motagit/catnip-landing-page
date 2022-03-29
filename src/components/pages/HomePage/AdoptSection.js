import React from 'react'
import './AdoptSection.scss'
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AdoptCard } from "./data/AdoptData.js";

function AdoptSection() {
  return (
    <>
    <img src={process.env.PUBLIC_URL + "/images/svg-retangulo.svg"} alt="" style={{width: '100%',marginTop: '-300px', marginBottom: '-10px'}}/>
        <div className='adopt-section' id='adopt'>
            <div className="container">
                <div className="row adopt-row">
                    <h1 className='heading'>How to Adopt</h1>
                </div>
            </div>
            <div className="adopt-container-slides">
                <div className="row">
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

                    {AdoptCard.map(card => 
                        <SwiperSlide>
                            <div className="card">
                                <img src={process.env.PUBLIC_URL + card.imgSrc} alt={card.imgAlt}/>
                                <h1>{card.headLine}</h1>
                                <p class="text">{card.description}</p>
                            </div>
                        </SwiperSlide>
                    )}
                    </Swiper>

                    
                </div>

            </div>
        </div>
    <img src={process.env.PUBLIC_URL + "/images/svg-retangulo-baixo.svg"} alt="" style={{width: '100%',marginTop: '-10px'}}/>
    </>
  )
}

export default AdoptSection