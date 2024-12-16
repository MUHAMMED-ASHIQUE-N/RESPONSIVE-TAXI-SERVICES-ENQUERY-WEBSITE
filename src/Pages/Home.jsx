import React from 'react';
import Header from '../Components/Header';
import backgroundImg from '../assets/slider-img.png';
import sightSeeingImg from '../assets/s1.png';
import ourFleetImg from '../assets/s2.png';
import cabRentImg from '../assets/s3.png';
import airportTaxiImg from '../assets/s4.png';
import railwayTaxiImg from '../assets/s5.png';
import packagesImg from '../assets/s6.png';
import Reuse from '../Components/Reuse';
import Tourist from '../Components/Tourist';
import slideImg from '../assets/taxiinwayanad.jpg'
import Footer from '../Components/Footer';
import Form from '../Components/Form';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="h-screen" >
      <nav>
        <Header />
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-20 w-full md:py-32">
        <div className="text-center w-full  md:text-left md:w-1/2 space-y-6 md:flex flex-col justify-center md:ml-12 xl:ml-32">
          <h2 className="text-4xl font-extrabold leading-tight">
            Tourist <br /> Taxi Wayanad
          </h2>
          <p className="text-lg text-gray-600 lg:w-[52%] font-normal">
            Ambikaganesh A Wayanad Taxi Service Situated At Sulthan Bathery Of Wayanad District Forward With An Aim Of Providing The Best Taxi Service In A Single Call Or Text Message.
          </p>
          <div className="space-x-4 ">
             <Link to="contact"> <button className=" py-3 bg-orange-600 text-white rounded-lg font-bold  w-32 hover:bg-orange-500">
           Enquire   
            </button> </Link>   
            <Link to="contact"> <button className="py-3 bg-gray-800 text-white rounded-lg font-bold w-32 hover:bg-gray-700">
             Call Us
            </button> </Link>  
          </div>
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img src={backgroundImg} alt="Taxi Illustration" className=" w-full" />
        </div>

      </div>
      <div className='text-center pt-5 '>
        <h1 className='text-3xl font-bold'>Our Services</h1>
      </div>


      <section>
        <div className=' lg:mx-auto  my-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto w-[90%]'>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col gap-2 items-center  sm:max-w-[400px] md:max-w-[350px]  '>
            <img src={sightSeeingImg} alt="error" className='w-32 mt-5' />
            <h1 className='text-xl font-bold  '>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Preparing for a mind-blowing trip, aside from all the rush ??? The snow-capped mountains of Wayanad is ready to welcome you with best taxi service for sight seeing.Enable your travel mode ON with our exciting Packages. For Avoiding the intermediate commision and easiness of national and international customers who choose our taxi service We accept your payments in UPI mode transaction, Banktransfer.</p>
          </div>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col gap-2 items-center max-w-[400px] md:max-w-[350px]'>
            <img src={ourFleetImg} alt="error" className='w-32 mt-5 ' />
            <h1 className='text-xl font-bold'>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Book best taxi service in Wayanad fullfill with fresh aroma at the best price in a single phone call or text message. Select CAB according to your convenience with our experts and get the best deals in our Pocket Friendly Hatchback, Economical Sedan, Travellers SUV Available in AC and Non-AC. Pre-Book A Taxi for Your Travel. Call Us Today To Get A Great Deal! Instant Quote & Online.Call Us Anytime. 24/7 Taxi Service Available.</p>
          </div>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col  gap-2 items-center max-w-[400px] md:max-w-[350px]'>
            <img src={cabRentImg} alt="error" className='w-32 mt-5' />
            <h1 className='text-xl font-bold'>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Get a cab from AmbikaGanesh Tourist Taxi for one day 100Kms at a rate of Rs.2500/ (sedan/hatchback) and Rs3000/ (suv) for 6hrs From SulthanBathery of Wayanad District.Extra kilometer will be charged on govt approved rates.Clean and Sanitized cab for local and outstation trips with professional and expert drivers. We believe in making our customers to say we are the best rather than saying we are best cab service in Wayanad.</p>
          </div>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col gap-2 items-center max-w-[400px] md:max-w-[350px]'>
            <img src={airportTaxiImg} alt="error" className='w-32 mt-5' />
            <h1 className='text-xl font-bold'>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Wayanad Taxi service provide cabs to and from Airport. We provide cab on a promise that your safety is our top priority. Our pricing is strictly on government approved rates no hidden charges are there.</p>
          </div>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col gap-2 items-center max-w-[400px] md:max-w-[350px]'>
            <img src={railwayTaxiImg} alt="error" className='w-32 mt-5' />
            <h1 className='text-xl font-bold'>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Wayanad Taxi service provide cabs to and from Railway. We provide cab on a promise that your safety is our top priority. Our pricing is strictly on government approved rates no hidden charges are there.</p>
          </div>
          <div className='bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] rounded-md border flex flex-col gap-2 items-center max-w-[400px] md:max-w-[350px]'>
            <img src={packagesImg} alt="error" className='w-32 mt-5' />
            <h1 className='text-xl font-bold'>Wayanad Sight Seeing</h1>
            <p className='pb-8 px-5 tracking-wide'>Planning your Vaccation in Wayanad?Looking for the Nearest Airport or Railway to reach Wayanad?Calicut is the best option . Just make a call and get your calicut-wayanad package from experts.</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <Reuse head="Sight Seeing At Rs.777" paragraph=" We offer Wayanad sightseeing package tours, at best price from SulthanBathery. This package includes historical & Tourist attraction in Wayanad at affordable price of Rs.777/ per head for a day from morning to evening in share cab. To get pre booked your slot click on register tab ."
            showButton={true} />
        </div>
      </section>
      <section>
        <div className='py-10'>
          <Tourist head="Tourist Attractions" showLink={false} subHeadOne="BanasuraSagar Dam" subHeadTwo="Pookode Lake" subHeadThree="Edakkal Caves"
            paragraphOne="The largest earth dam in India, is constructed in the Banasura lake in Wayanad."
            paragraphTwo="A natural fresh water lake surrounded by evergreen forest and rolling hills"
            paragraphThree="A trip to Edakkal Caves is like a journey into our forgotten past" />
        </div>
      </section>
      <section>
        <div className='w-full py-14'>
          <div className='mx-auto w-[80%]'>
            <div className='text-center'>
              <h1 className='font-bold text-3xl'>Testimonial</h1>
              <p className='py-8'>Sanitized cabs|Proffessional Drivers|Fast Booking|Best price|WayanadSightseeing</p>
            </div>

            <div className=''>
              <div className=' bg-white shadow-[0px_15px_20px_rgba(0,0,0,0.2)] flex flex-col md:flex-row md:items-center relative'>
                <div className='w-[100%] py-16 md:w-80 md:py-36  bg-[#ff6f3d] shadow-[0px_15px_20px_rgba(0,0,0,0.2)]'></div>
                <div className="mx-auto absolute left-24 top-12 md:top-16 md:left-12"><img src={slideImg} alt="" className='mx-auto rounded-full w-36 border-4 border-white' /></div>
                <div className='flex flex-col py-12 gap-4'>
                  <div className='mx-auto w-[80%] '>
                    <h1 className='text-xl font-bold leading-none text-[#ff6f3d]'>Alex Paul</h1>
                    <p className='text-zinc-400 leading-none'>customer</p>
                  </div>
                  <div className='mx-auto w-[80%]'>
                    <p>The ride was excellent. We booked from bangalore to waynad & at the last moment still managed to get the best service from Ambika Taxi Services. The driver Ajith was also a local tourist guide for us for 4 days and we managed to cover the most of waynad in short span of time. Its for sure next time if we planning to visit kerala we will depend their services. Much recommended!!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
          <Form />
      </section>

      <footer className='pt-20'>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
