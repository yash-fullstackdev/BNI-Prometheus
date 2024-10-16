"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import bniImage from '../../public/images/bni.png';
import bniImageMobile from "../../public/images/bni-mobile.png";

const HeroSection = ({ searchQuery, setSearchQuery }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect screen size changes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // For mobile screens
        };

        // Run the handler on mount and when the window is resized
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative w-[100vw] md:w-[100vw] h-[650px] bg-black">
            <Image
                src={isMobile ? bniImageMobile : bniImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <div className="relative bottom-0 z-10 w-full px-6 pt-8">
                <div className="flex justify-center bottom-0">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="px-4 py-2 rounded-l-lg bg-white bg-opacity-70 text-gray-700 border-none focus:outline-none bottom-0"
                    />
                    <button className="bg-blue-500 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
