import React from 'react'
import { Button } from './Button.js'
import './HeroSection.scss'

function HeroSection({
    headLine, 
    description,
    buttonLabel, 
    imgSrc, 
    imgAlt, 
    imgStart
}) {
  return (
    <>
        <div className="home__hero-section">
            <div className="container">
                <div className="row home__hero-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <h1 className='heading'>{headLine}</h1>
                            <p className='home__hero-subtitle'>{description}</p>
                            {buttonLabel && (
                            <a href="#">
                                <Button buttonSize='btn--large'>
                                    {buttonLabel}
                                </Button>
                            </a>
                            )}  
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__hero-img-wrapper" style={{marginLeft: imgStart === 'row-reverse' && '40px'}}>
                            <img src={imgSrc} alt={imgAlt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection