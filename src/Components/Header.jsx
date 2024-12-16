import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-[9]" >
      <div className="max-w-7xl mx-auto px-4 smtext-orange-700">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-700">Jungle Holidays</h1>
          </div>


          <div className="hidden md:flex space-x-8">
            <a href="" className="font-bold hover:text-orange-700"><Link to={"/"}>Home</Link></a>
            <a href="" className="font-bold hover:text-orange-700"><Link to={"/about"}>About</Link></a>
            <a href="" className="font-bold hover:text-orange-700"><Link to={"/tarrif"}>Tarrif</Link></a>
            <a href="" className="font-bold hover:text-orange-700"><Link to={"/wayanad"}>Wayanad</Link></a>
            <a href="" className="font-bold hover:text-orange-700"><Link to={"/contact"}>Contact</Link></a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white">

              {isOpen ? (<span className="text-gray-800 text-3xl mx-2">< FontAwesomeIcon icon={faXmark} /> </span>) : (<span className="text-slate-800 text-3xl"> <FontAwesomeIcon icon={faBars} /></span>)}

            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
            {}
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-2 px-2 pt-2 pb-3 ">
            <a href="#" className="block text-center text-[#292725] font-bold hover:bg-orange-500 rounded-md px-3 py-2 mx-auto w-1/4"><Link to={"/"}>Home</Link></a>
            <a href="#" className="block text-center text-[#292725] font-bold hover:bg-orange-500 rounded-md px-3 py-2 mx-auto w-1/4"><Link to={"/about"}>About</Link></a>
            <a href="#" className="block text-center text-[#292725] font-bold hover:bg-orange-500 rounded-md px-3 py-2 mx-auto w-1/4"><Link to={"/tarrif"}>Tarrif</Link></a>
            <a href="#" className="block text-center text-[#292725] font-bold hover:bg-orange-500 rounded-md px-3 py-2 mx-auto w-1/4"><Link to={"/wayanad"}>Wayanad</Link></a>
            <a href="#" className="block text-center text-[#292725] font-bold hover:bg-orange-500 rounded-md px-3 py-2 mx-auto w-1/4"><Link to={"/contact"}>Contact</Link></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
