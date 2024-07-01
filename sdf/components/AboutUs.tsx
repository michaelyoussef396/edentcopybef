"use client";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { imageAnimation, textAnimation, listItemAnimation } from '@/utils/Animations';
import Button from '@/components/Button'; // Adjust the import path as necessary

const AboutUs: React.FC = () => {
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });
  const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true });

  const imageControls = useAnimation();
  const textControls = useAnimation();
  const listControls = useAnimation();

  if (imageInView) imageControls.start("visible");
  if (textInView) textControls.start("visible");
  if (listInView) listControls.start("visible");

  return (
    <section className="relative pt-16 bg-white">
      <div className="absolute inset-0 bg-gray-100 opacity-50"></div>
      <div className="relative max-w-6xl mx-auto p-6 md:p-12">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0 relative"
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={imageAnimation}
          >
            <Image 
              src="/about-1.png" // make sure this image path is correct
              alt="Person with Suitcase"
              width={500} // Adjust the width
              height={500} // Adjust the height
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left md:pl-8"
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textAnimation}
          >
            <span className="text-xl font-semibold text-red-600">Who we are?</span>
            <h2 className="text-3xl font-bold mb-4">A Few Words About Us</h2>
            <p className="mb-4">
              EDEN INTERNATIONAL was built in 2010, keeping in mind those struggling clients finding it hard to determine their career pathway abroad for onshore or offshore higher education, migration. Being a multinational company, with a head office in Sydney, equipped with worlds class consultants awarded with PIER and MARA certificates both in Sydney, Melbourne, Italy, Croatia Malta, Turke and Bangladesh branch in order to provide our students and clients a seamless service all across the world.
            </p>
            <motion.ul
              className="list-none text-left space-y-2"
              ref={listRef}
              initial="hidden"
              animate={listControls}
            >
              {[
                "Migration",
                "Student Admission",
                "Sponsored Jobs",
                "Skills Recognition"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-base"
                  variants={listItemAnimation}
                >
                  <Image src="/tick.png" alt="Tick" width={20} height={20} className="mr-2" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-4">
              <Button href="/about-us" text="About More" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
