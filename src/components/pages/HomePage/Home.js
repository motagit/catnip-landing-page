import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne, homeObjSecond} from './Data'

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjSecond} />
    </>
  )
}

export default Home