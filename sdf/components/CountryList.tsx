"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { sectionTitleAnimation, listFromLeftAnimation, imageFromRightAnimation } from '@/utils/Animations';
import { countries } from '@/data';

const CountryList: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });
  const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });

  const sectionControls = useAnimation();
  const listControls = useAnimation();
  const imageControls = useAnimation();

  if (sectionInView) sectionControls.start("visible");
  if (listInView) listControls.start("visible");
  if (imageInView) imageControls.start("visible");

  const half = Math.ceil(countries.length / 2);
  const firstHalf = countries.slice(0, half);
  const secondHalf = countries.slice(half);

  return (
    <section className="relative pt-16 bg-white" ref={sectionRef}>
      <div className="absolute inset-0 z-0">
        <Image 
          src="/shape-7.jpg" // make sure this image path is correct
          alt="Background Shape"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <motion.div
        className="relative max-w-6xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center z-10"
        initial="hidden"
        animate={sectionControls}
        variants={sectionTitleAnimation}
      >
        <div className="md:w-1/2">
          <motion.div
            ref={listRef}
            initial="hidden"
            animate={listControls}
            variants={listFromLeftAnimation}
          >
            <h3 className="text-red-600 text-sm mb-2">SUPPORT AREA</h3>
            <h2 className="text-3xl font-bold mb-4">Country List For Immigration</h2>
            <h4 className="text-xl font-semibold mb-4">Country List:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="list-none space-y-2">
                {firstHalf.map((country, index) => (
                  <li key={index} className="text-base">
                    <span className="text-red-600 mr-2">•</span>{country}
                  </li>
                ))}
              </ul>
              <ul className="list-none space-y-2">
                {secondHalf.map((country, index) => (
                  <li key={index} className="text-base">
                    <span className="text-red-600 mr-2">•</span>{country}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={imageFromRightAnimation}
        >
          <div className="relative w-full h-[500px] overflow-hidden">
            <Image 
              src="/women-1.png" // make sure this image path is correct
              alt="About Us"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CountryList;
