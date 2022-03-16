import React from 'react'
import AdoptSection from '../../AdoptSection'
import InfoSection from '../../InfoSection'
import {homeObjOne, homeObjSecond} from './InfoData'

function Home() {
  return (
    <>
        <InfoSection {...homeObjOne} id="top" />
        <InfoSection {...homeObjSecond} id='about' />
        <AdoptSection id='adopt'/>
    </>
  )
}

export default Home