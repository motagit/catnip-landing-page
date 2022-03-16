import React from 'react'
import { Button } from './Button.js'
import './AdoptSection.scss'

function AdoptSection({
    headLine,
    description,
    imgSrc,
    imgAlt,
    imgPosition
}) {
  return (
    <>
    <img src="/images/svg-retangulo.svg" alt="" style={{marginTop: '-300px', marginBottom: '-10px'}}/>
        <div className='adopt-section' id='adopt'>
            <div className="container">
                <div className="row adopt-row">
                    <h1 className='heading'>How to Adopt</h1>
                </div>
            </div>
        </div>
    <img src="/images/svg-retangulo-baixo.svg" alt="" style={{marginTop: '-10px'}}/>
    </>
  )
}

export default AdoptSection