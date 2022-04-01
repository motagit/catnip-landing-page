import React from 'react'
import { Button } from '../../Button.js'
import { Link } from "react-router-dom"
import './InfoSection.scss'

function InfoSection(props) {
  return (
    <>
        <div className={'info-section ' + props.sectionName} ref={props.reference}>
            <div className="container">
                <div className="row info-row"
                style={{display: 'flex', flexDirection: props.imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="info-text-wrapper">
                            <h1 className='heading'>{props.headLine}</h1>
                            <p className='info-subtitle'>{props.description}</p>
                            {props.buttonLabel && (
                            <Link to=''>
                                <Button buttonSize='btn--large'>
                                    {props.buttonLabel}
                                </Button>
                            </Link>
                            )}  
                        </div>
                    </div>
                    <div className="col">
                        <div className="info-img-wrapper" style={{marginLeft: props.imgStart === 'row-reverse' && '40px'}}>
                            <img src={process.env.PUBLIC_URL + props.imgSrc} alt={props.imgAlt} className="info-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoSection