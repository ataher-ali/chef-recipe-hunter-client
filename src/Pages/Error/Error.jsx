import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className="h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-extrabold mb-2">Oops! Page not found.</h1>
        <p className="text-white text-lg mb-8">The page you are looking for does not exist.</p>
        <p to="/" className="bg-white w-60 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-full">
          Go back home
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 z-0">
        <path fill="#ffffff" fillOpacity="1" d="M0,32L80,69.3C160,107,320,181,480,186.7C640,192,800,128,960,96C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>


    </div>
    );
};

export default Error;