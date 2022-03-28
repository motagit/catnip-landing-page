import React from 'react'
import AdoptedCats from '../../AdoptedCats'
import AdoptSection from '../../AdoptSection'
import InfoSection from '../../InfoSection'
import {homeObjOne, homeObjSecond, homeObjThird} from './InfoData'

function Home() {
  return (
    <>
        <InfoSection {...homeObjOne} id="top" />
        <InfoSection {...homeObjSecond} id='about' />
        <AdoptSection id='adopt'/>
        <AdoptedCats id='cats'/>
        <InfoSection {...homeObjThird} id='help' />
    </>
  )
}

export default Home