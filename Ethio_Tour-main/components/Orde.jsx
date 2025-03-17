import React from "react";

const Order = () => {
  return (
    <section className="dark:bg-black dark:text-white duration-300" id="order">
      <h1 className="heading">
        <span>order</span> now
      </h1>
      <div className="row p-8 shadow-md bg-white flex flex-wrap gap-6 rounded-md">
        <div className="image flex-1 flex-1/4">
          <img
            src= "../assets/77.jpg"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <form className="flex-1 flex-1/2 p-4">
          <div className="inputBox flex flex-wrap gap-6">
            <input
              type="text"
              placeholder="Name"
              className="p-4 border border-gray-300 rounded-md w-48"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 border border-gray-300 rounded-md w-48"
            />
          </div>
          <div className="inputBox flex flex-wrap gap-6">
            <input
              type="number"
              placeholder="Number"
              className="p-4 border border-gray-300 rounded-md w-48"
            />
            <input
              type="text"
              placeholder="Food Name"
              className="p-4 border border-gray-300 rounded-md w-48"
            />
          </div>
          <textarea
            placeholder="Address"
            className="p-4 border border-gray-300 rounded-md w-full resize-none h-40"
          ></textarea>
          <input
            type="submit"
            value="Order Now"
            className="btn bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded-md"
          />
        </form>
      </div>
    </section>
  );
};

export default Order;
