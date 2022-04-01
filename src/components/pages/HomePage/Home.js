import React, { useRef } from 'react'
import AdoptedCats from './AdoptedCats'
import AdoptSection from './AdoptSection'
import InfoSection from './InfoSection'
import {homeObjOne, homeObjSecond, homeObjThird} from './data/InfoData'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Home() {
  const about = useRef();
  const help = useRef();
  const adoption = useRef();

  return (
    <>
        <Navbar reference={{about, help, adoption}}/>
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjSecond} reference={about}/>
          <AdoptSection reference={adoption}/>
          <AdoptedCats />
          <InfoSection {...homeObjThird} reference={help}/>
        <Footer />
    </>
  )
}

export default Home