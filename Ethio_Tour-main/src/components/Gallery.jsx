import React from "react";
import carImage from "../assets/car.png";
import bannerCarImage from "../assets/banner-car.png" ;
import image22 from "../assets/22.jpg";
import image33 from "../assets/33.jpg";
import image44 from "../assets/44.jpg";
import image55 from "../assets/55.jpg";
import image66 from "../assets/66.jpg";
import image77 from "../assets/77.jpg";







const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 data-aos="fade-up" className=" heading text-3xl sm:text-4xl font-bold font-serif text-center mb-8">Our Top <span>Destinations</span></h1>
      <div className="box-container flex flex-wrap gap-6">
        {/* First Row */}
        <div 
        data-aos="slide-right" data-aos-duration="1500"
         className="group relative overflow-hidden  border border-white shadow-md rounded-md w-full md:w-[400px] ml-4">
          <img src={image22} alt="Delicious Burger" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Danakil Desert</h3>
            <p className="text-lg text-gray-700 py-4">The Danakil Desert is a vast and hostile 
            desert located in the northeastern part of Ethiopia,  It is one of the hottest and lowest places on Earth, known for its extreme
             temperatures 
          .</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>

        <div
         data-aos="fade-up"
         className="group relative overflow-hidden border border-white shadow-md rounded-md w-full md:w-[400px]">
          <img src={image33} alt="Gourmet Pizza" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Gondar Castle</h3>
            <p className="text-lg text-gray-700 py-4">Gondar Castle is situated in the city of Gondar in the 
            northern part of Ethiopia.
              Gond ar itself was the capital of the Ethiopian Empire during the 17th and 18th centuries.</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>

        <div  
        data-aos="slide-right" data-aos-duration="1500"
         className="group relative overflow-hidden border border-white shadow-md rounded-md w-full md:w-[400px]">
          <img src={image44} alt="Another Tasty Dish" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Lalibela</h3>
            <p className="text-lg text-gray-700 py-4">Lalibela is located in the Amhara Region 
            of northern Ethiopia.
              The town is situated in the Lasta mountain range, known for its rugged and rocky terrain.</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>

        {/* Second Row */}
        <div 
         data-aos="fade-up"
        className="group relative overflow-hidden  border border-white shadow-md rounded-md w-full md:w-[400px] ml-4">
          <img src={image55} alt="Delicious Burger" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Harar Jugol</h3>
            <p className="text-lg text-gray-700 py-4">Harar Jugol is a UNESCO World Heritage Site and is known for its rich cultural and historical significance</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>

        <div 
         data-aos="fade-up"
        className="group relative overflow-hidden border border-white shadow-md rounded-md w-full md:w-[400px]">
          <img src={image66} alt="Gourmet Pizza" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Tiya Stelae</h3>
            <p className="text-lg text-gray-700 py-4">it is a UNESCO World Heritage Site in Ethiopia known for its ancient megalithic pillars or stelae</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>

        <div 
        data-aos="slide-right" data-aos-duration="1500"
        className="group relative overflow-hidden border border-white shadow-md rounded-md w-full md:w-[400px]">
          <img src={image77} alt="Another Tasty Dish" className="w-full h-full object-cover" loading="lazy" />
          <div className="content absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 p-8 text-center">
            <h3 className="text-2xl font-bold">Axum</h3>
            <p className="text-lg text-gray-700 py-4">which is a city in northern Ethiopia known for 
            its historical and archaeological significance.</p>
            <a href="#" className="btn text-primary hover:text-black duration-300">Read more</a>
          </div>
        </div>


        {/* Add three more similar divs for the second row */}
      </div>
    </section>
  );
};

export default Gallery;
