import React from 'react'
import './AdoptSection.scss'
import "swiper/css";
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { AdoptCard } from "./data/AdoptData.js";

function AdoptSection(props) {
    console.log(props);
  return (
    <>
    <img src={process.env.PUBLIC_URL + "/images/svg-retangulo.svg"} alt="" style={{width: '100%',marginTop: '-300px', marginBottom: '-10px'}}/>
        <div className='adopt-section' id='adopt' ref={props.reference}>
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
                            880: {
                                slidesPerView: 1,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                            1550: {
                                slidesPerView: 4,
                            }
                        }}
                        navigation={true}
                        spaceBetween={30}
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