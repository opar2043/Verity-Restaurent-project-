import React from "react";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from "../../../assets/assets/home/01.jpg";
import img2 from "../../../assets/assets/home/02.jpg";
import img3 from "../../../assets/assets/home/03.png";
import img4 from "../../../assets/assets/home/04.jpg";
import img5 from "../../../assets/assets/home/05.png";
import qr from "../../../assets/assets/home/qe.png";
import scanner from "../../../assets/assets/home/scaner.png";
import Title from "../../Shared/Title";

const Banner = () => {
  return (
    <div className="bg-gray-50">
      {/* Carousel Section */}
      <Carousel>
        <div>
          <img src={img1} alt="Slide 1" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" />
        </div>
        <div>
          <img src={img4} alt="Slide 4" />
        </div>
        <div>
          <img src={img5} alt="Slide 5" />
        </div>
      </Carousel>

      {/* Title Section */}
      <Title head={"Reach Us"} sub={"Make a Quick Reach"} />

      {/* Info Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-md p-8 gap-8 my-10">
        {/* Scanner Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left flex-1">
          <img
            src={scanner}
            className="w-20 md:w-40 mb-4 md:mb-0 md:mr-4"
            alt="Scanner"
          />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Scan to See Our Full Menu
          </h2>
        </div>

        {/* QR Code Section */}
        <div className="w-40 md:w-full flex-1">
          <img src={qr} alt="QR Code" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
