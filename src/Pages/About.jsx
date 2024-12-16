import React from 'react'
import Header from '../Components/Header'
import aboutImage from '../assets/about-img.png'
import Footer from '../Components/Footer'
import Reuse from '../Components/Reuse'

function About() {
  return (
    <div className="h-auto w-full">
      <nav>
        <Header />
      </nav>
      <div>
        <Reuse head="About us" paragraph="AmbikaGanesh Tourist Taxi situated at SulthanBathery of Wayanad District forward with an aim of providing the best taxi service.From the traditional method of booking or hiring taxi from a station and completing journey. We are bringing our service on your finger tips with a call or message and increase the scope of what our customer wants.For the easiness of national and international customers who choose our taxi service We accept your payments in UPI transaction, Banktransfer, Cash. We beleives in offering quality services at reasonable price points. It is taking conscientious strides at achieving customer satisfaction through maintaining impeccable standards in service offerings.We are in focus to provide reliable and comfort taxi service 24x7 in Wayanad on call with expert and professional drivers."
          showButton={false} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default About


