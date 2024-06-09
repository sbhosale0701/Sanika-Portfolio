import React from 'react';
import todo from '../assets/todo.png';
import otp from '../assets/otp.png';
import multi from '../assets/multi games.png';
import quiz from '../assets/quiz.png';
import cal from '../assets/calculator.png';
import w from '../assets/weather.png';
import pf from '../assets/port.png';
import soc from '../assets/stack.png';
import img from '../assets/images.png';

const Works = () => {
  return (
    <div name='work' className='w-full h-screen md:h-full text-gray-300 bg-[#1a3256] bg-cover'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full bg-cover'>
        <div className='pb-8 w-full flex justify-center items-center flex-col bg-cover'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500 '>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* New Work 1 */}
          <div
            style={{ backgroundImage: `url(${img})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                College Level Discussion Forum
              </span>
              <p className='text-center'>A live forum for my college built in MERN Stack!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/SnehalMarutiSalokhe/college-level-discussion-forum'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* New Work 2 */}
          <div
            style={{ backgroundImage: `url(${soc})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Stack Overflow Clone
              </span>
              <p className='text-center'>A Stack Overflow Clone built in MERN Stack!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/Stack-Overflow-Clone-Modify'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* New Work 3 */}
          <div
            style={{ backgroundImage: `url(${pf})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                My Portfolio
              </span>
              <p className='text-center'>My Portfolio built in React, Tailwind and Firebase!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/new-work-3'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Existing Works */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                TO-DO App
              </span>
              <p className='text-center'>TO-DO app using local storage database HIVE in Flutter!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/TODO-APP'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${quiz})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Quiz Application
              </span>
              <p className='text-center'>A Quiz application build with ReactJS!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/QuizQuestions'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${w})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Weather App
              </span>
              <p className='text-center'>A weather application using OpenmapAPI in Flutter!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/weatherapp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cal})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Calculator Application
              </span>
              <p className='text-center'>A calculator application built with ReactJS</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/Calculator-App-In-ReactJS'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${multi})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                A Platform for Multiple Games
              </span>
              <p className='text-center'>A platform for multiple games build using C++!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/PlatformForMultiGames'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${otp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
              <span className=' text-lg font-bold text-white tracking-wider'>
                Phone Number Authentication App
              </span>
              <p className='text-center'>A phone number authentication app using Twilio API in Flutter!</p>
              <div className='pt-8 text-center'>
                <a href='https://github.com/sbhosale0701/Phone-Number-Authentication-Using--TwilioAPI'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
