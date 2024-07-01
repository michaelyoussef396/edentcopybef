"use client";
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button'; // Ensure the Button component is correctly imported

const TheAboutUs: React.FC = () => {
  return (
    <section className="relative pt-16 bg-white">
      <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <span className="text-xl font-semibold text-red-600">WHO WE ARE?</span>
            <h2 className="text-3xl font-bold mb-4">A Few Words About Us</h2>
            <p className="mb-4">
              EDUCUBE was built in 2010, keeping in mind those struggling clients finding it hard to determine their career pathway abroad for onshore or offshore higher education, migration. Being a multinational company, with a head office in Sydney, equipped with worlds class consultants awarded with PIER and MARA certificates both in Sydney, Melbourne, Italy, Croatia Malta, Turkey and Bangladesh branch in order to provide our students and clients a seamless service all across the world.
            </p>
            <Button href="https://edeninternational.in/about-us/" text="Contact Us" />
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full h-auto">
              <Image 
                src="/about.png" // Ensure this path is correct
                alt="About Us"
                width={500} // Adjust the width if needed
                height={500} // Adjust the height if needed
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheAboutUs;
