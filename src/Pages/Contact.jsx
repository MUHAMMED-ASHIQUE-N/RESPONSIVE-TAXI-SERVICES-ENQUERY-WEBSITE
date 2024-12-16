import React from 'react'
import Header from '../Components/Header'
import Form from '../Components/Form'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div className='w-full'>
      <header>
        <Header />
      </header>
      <main>
       <Form />
      </main>
      <footer className='pt-20'>
    <Footer />

      </footer>
    </div>
  )
}

export default Contact