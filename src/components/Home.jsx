import React from "react";
import { Link } from "react-router-dom";
import Sarvice from "./Sarvice";

const Home = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 mt-16">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              This is a bast hotel..........
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
              >
                Suspendisse
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
              >
                Malesuada
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlGvqKGaOkU-A6RUxGoi68GH4IgrHodjhXw&usqp=CAU"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>


      <div className="mt-16">
        <Sarvice></Sarvice>
      </div>
    </div>
  );
};

export default Home;
