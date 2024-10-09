import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary-600">Welcome to Blood Report Analyzer</h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-gray-700">
        Our advanced platform helps patients and doctors manage and analyze blood reports efficiently.
        Upload your reports, get expert analysis, and receive prescriptions all in one place.
      </p>
      <div className="space-y-4">
        <Link 
          to="/login" 
          className="btn btn-primary text-lg"
        >
          Login / Sign Up
        </Link>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary-500">Key Features</h2>
        <ul className="list-none text-left max-w-md mx-auto space-y-2">
          {[
            'Secure upload and storage of blood reports',
            'Instant analysis of report abnormalities',
            'Direct communication with doctors',
            'Prescription management',
            'Historical data tracking',
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;