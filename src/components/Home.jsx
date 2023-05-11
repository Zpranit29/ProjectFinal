import React from 'react';
import background from '../assets/computer.jpg';
import CorecoLogo from "../assets/coreco logo.png";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(background-image.jpg)' }}>
      <nav>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <img src={CorecoLogo} alt="Coreco Logo" className="h-8" />
            <Link to='/login'>
            <button className="px-4 py-2 rounded-md text-white bg-dark-coreco hover:bg-light-coreco transition-colors duration-300">Log In</button>
            </Link>
          </div>
        </div>
      </nav>

      <header className="flex flex-col items-center justify-center flex-grow bg-opacity-75 bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        
        <h1 className="text-4xl font-bold text-white">Welcome to Company Bench Sharing Portal</h1>
        <p className="mt-4 text-xl text-white">Delivering innovative software solutions for your business</p>
        <a href="#services" className="mt-8 px-8 py-3 bg-dark-coreco text-white rounded-md hover:bg-light-coreco transition-colors duration-300">Explore Our Services</a>
      </header>

      <section id="services" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
            
              <h3 className="text-xl font-bold text-gray-800">Variety of Resources</h3>
              <p className="text-gray-600">Wide range of resources to meet your unique business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
            
              <h3 className="text-xl font-bold text-gray-800">Instance Booking</h3>
              <p className="text-gray-600">Book your resources instantly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              
              <h3 className="text-xl font-bold text-gray-800">Log Book of Resources Booked</h3>
              <p className="text-gray-600">See which resources you had booked in past.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
