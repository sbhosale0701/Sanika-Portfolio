import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import m3 from '../assets/m3.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-[#1a3256]"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-6xl font-bold text-white">
          I'm a MERN Stack & Flutter Developer!
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
           I'm a BTech Last Year student gaving interest in MERN stack and Flutter Development.
          Currently, I love to work on application using technologies like
          React, Tailwind, MangoDB, ExpressJS , NodeJS, Dart, Firebase and Java.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={m3}  
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-full"
        />
      </div>
    </div>
  </div>
  );
};
export default Home;