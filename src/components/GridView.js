"use client";
import React, { useState } from 'react';
import data from '../data.json';
import HeroSection from '../components/HeroSection';

const GridView = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.designation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="flex flex-wrap grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 p-8 justify-centre">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative w-50 md:w-50 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
          >
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img src={item.image} alt="profile-picture" className="w-[300px] h-[300px] object-contain" />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.name}
              </h4>
              <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                {item.designation}
              </p>
              <p>{item.companyName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridView;




