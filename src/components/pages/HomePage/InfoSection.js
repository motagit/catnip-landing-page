import React from 'react'
import { Button } from '../../Button.js'
import './InfoSection.scss'

function InfoSection({
    sectionName,
    headLine, 
    description,
    buttonLabel, 
    imgSrc, 
    imgAlt, 
    imgStart
}) {
  return (
    <>
        <div className='info-section' id={sectionName}>
            <div className="container">
                <div className="row info-row"
                style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="info-text-wrapper">
                            <h1 className='heading'>{headLine}</h1>
                            <p className='info-subtitle'>{description}</p>
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
                        <div className="info-img-wrapper" style={{marginLeft: imgStart === 'row-reverse' && '40px'}}>
                            <img src={process.env.PUBLIC_URL + imgSrc} alt={imgAlt} className="info-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoSection