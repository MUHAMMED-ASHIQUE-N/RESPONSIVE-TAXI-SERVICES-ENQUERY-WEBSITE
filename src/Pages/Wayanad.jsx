import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Tourist from '../Components/Tourist'

function Wayanad() {
  return (
    <div className='w-full h-screen '>
      <div>
        <Header />
      </div>
      <div>
        <Tourist head='Attractions In Wayanad' showLink={true} subHeadOne ="Banasura" subHeadTwo="Pookode" subHeadThree="Edakkal "
        paragraphOne="Banasura Sagar dam, the largest earth dam in India"
        paragraphTwo="Pookode Lake is a scenic freshwater lake in the Wayanad district in Kerala"
        paragraphThree="The Edakkal Caves are famous for their paintings of figures: human, animals, symbols and letters."/>
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default Wayanad