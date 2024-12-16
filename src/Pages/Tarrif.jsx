import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const tariffData = [
  { id: 1, service: "Calicut Airport pickup dropping SulthanBathery", hatchback: "RS.4320/-", sedan: "RS.4320/-", suv: "RS.4800" },
  { id: 2, service: "SulthanBathery to Calicut Airport dropping", hatchback: "RS.4320/-", sedan: "RS.4320/-", suv: "RS.4800" },
  { id: 3, service: "SulthanBathery local use 100 km for 6 hr", hatchback: "RS.2400/-", sedan: "RS.2400/-", suv: "RS.2600" },
  { id: 4, service: "SulthanBathery local use 50 km for 3 hr", hatchback: "RS.1300/-", sedan: "RS.1300/-", suv: "RS.1500" },
  { id: 5, service: "SulthanBathery local use 30 km for 2 hr", hatchback: "RS.800/-", sedan: "RS.800/-", suv: "RS.1000" },
  { id: 6, service: "Out station More Than 150km", hatchback: "RS.18 per km", sedan: "RS.18 per km", suv: "RS.20 per km" },
  { id: 7, service: "One Day Wayanad Sight Seeing", hatchback: "RS.3000 + batta", sedan: "RS.3000 + batta", suv: "RS.3500 + batta" },
  { id: 8, service: "Two days Wayanad Sight Seeing", hatchback: "RS.6000 + batta", sedan: "RS.6000 + batta", suv: "RS.7000 + batta" },
];


const TariffRow = ({ id, service, hatchback, sedan, suv }) => (
  <tr className="">
    <td className="border border-slate-800 px-4 py-2">{id}</td>
    <td className="border border-slate-800 px-4 py-2">{service}</td>
    <td className="border border-slate-800 px-4 py-2">{hatchback}</td>
    <td className="border border-slate-800 px-4 py-2">{sedan}</td>
    <td className="border border-slate-800 px-4 py-2">{suv}</td>
  </tr>
);

function Tarrif() {
  return (
    <div>
      <Header />

      <main className="py-8">
        <h1 className="text-3xl font-bold text-center mb-6">Vehicles Rate</h1>
        
        <div className="overflow-x-auto max-w-6xl mx-auto p-4">
          <table className="w-full table-auto border-collapse border border-slate-800">
            <thead>
              <tr className="bg-gray-900 text-white text-center">
                <th className="border border-slate-800 px-4 py-2">SL No</th>
                <th className="border border-slate-800 px-4 py-2">Service</th>
                <th className="border border-slate-800 px-4 py-2">Hatchback</th>
                <th className="border border-slate-800 px-4 py-2">Sedan</th>
                <th className="border border-slate-800 px-4 py-2">SUV</th>
              </tr>
            </thead>
            <tbody>
              {tariffData.map((item) => (
                <TariffRow key={item.id} {...item} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10 space-y-2">
          <p>SulthanBathery Local use extra km and extra hours charge applicable based on vehicle category.</p>
          <p>Outstation night halting, driver batta, toll, permit, tax, and parking charges are applicable.</p>
          <p>Charges vary during festive seasons.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Tarrif;
