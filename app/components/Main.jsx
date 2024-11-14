import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">
        Different Data Logging and Monitoring Applications
      </h1>
      <div className="w-full max-w-md space-y-4">
        <Link
          href="https://productionreport.vercel.app"
          className="block w-full text-center py-3 px-4 md:py-4 md:px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          target="_blank"
        >
          Energy Monitoring
        </Link>
        <Link
          href="https://sohamtex.vercel.app"
          className="block w-full text-center py-3 px-4 md:py-4 md:px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          target="_blank"
        >
          Production Monitoring
        </Link>
      </div>
    </div>
  );
};

export default Main;
