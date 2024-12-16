import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,  faGoogle,  faInstagram, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-[#292725] text-white py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-col justify-between items-center space-y-6 md:space-y-0">
                <div className="flex flex-col items-start space-y-2 lg:flex-row gap-4">
                    <div className="flex items-center space-x-3">
                        <span className="border border-orange-500 p-2 rounded">
                        <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <p>Sulthan Bathery</p>
                    </div>

                    <div className="flex items-center space-x-3">
                        <span className="border border-orange-500 p-2 rounded">
                        <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <p>Call +91 8075578293</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="border border-orange-500 p-2 rounded">
                        <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <p>wayanadtaxiservice@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="border border-orange-500 p-2 rounded">
                        <FontAwesomeIcon icon={faGoogle} />
                        </span>
                        <a href="#" className="text-orange-500  hover:underline">Write a Review</a>
                    </div>
                   
                </div>

                <div className="text-center ">
                    <h3 className="text-xl font-bold  my-5 lg:my-8">Jungle Holidays</h3>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-orange-500"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="hover:text-orange-500"><FontAwesomeIcon icon={faWhatsapp} /></a>
                        <a href="#" className="hover:text-orange-500"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                <p>© 2024 All Rights Reserved by WayanadTaxiService</p>
            </div>
        </footer>
    );
};

export default Footer;
