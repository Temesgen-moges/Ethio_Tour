import React from "react";

const Rev = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        our customers <span>review</span>
      </h1>
      <div className="box-container flex flex-wrap gap-6">
        <div className="box text-center p-8 border-4 border-white shadow-md rounded-md flex-1 30rem bg-gray-800 mt-24">
          <img
            src="images/11.jpg"
            alt=""
            className="h-48 w-48 rounded-full border-4 border-white -mt-32 object-cover"
          />
          <h3 className="text-2xl text-white py-2">Temesgen .M</h3>
          <div className="stars">
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="far fa-star text-red-500"></i>
          </div>
          <p className="text-lg text-gray-300 py-1">
            This is one of the best restaurants I've ever seen in my life. The
            food, the drinks, ice-cream are so good.
          </p>
        </div>

        <div className="box text-center p-8 border-4 border-white shadow-md rounded-md flex-1 30rem bg-gray-800 mt-24">
          <img
            src="images/123.jpg"
            alt=""
            className="h-48 w-48 rounded-full border-4 border-white -mt-32 object-cover"
          />
          <h3 className="text-2xl text-white py-2">Temesgen .M</h3>
          <div className="stars">
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="fas fa-star text-red-500"></i>
            <i className="far fa-star text-red-500"></i>
          </div>
          <p className="text-lg text-gray-300 py-1">
            This is one of the best restaurants I've ever seen in my life. The
            food, the drinks, ice-cream are so good.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rev;
