"use client"
import { steps } from '@/data';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { circleAnimation, textAnimation } from '@/utils/Animations';
import Image from 'next/image';

const WorkingProcess: React.FC = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const sectionControls = useAnimation();

  if (sectionInView) sectionControls.start("visible");

  return (
    <section className="relative py-16 bg-gray-100" ref={sectionRef}>
      <div className="absolute inset-x-0 bottom-0 top-1/2 z-0">
        <Image 
          src="/shape-8.jpg" // make sure this image path is correct
          alt="Background Shape"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <motion.div
        className="relative max-w-6xl mx-auto text-center p-6 md:p-12 z-10"
        initial="hidden"
        animate={sectionControls}
        variants={circleAnimation}
      >
        <h3 className="text-red-600 text-sm mb-2">WORKING PROCESS</h3>
        <h2 className="text-2xl font-medium mb-12">3 Easy Steps to Get Quick Help</h2>
        <div className="flex flex-col md:flex-row items-center justify-around space-y-8 md:space-y-0 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center"
              initial="hidden"
              animate={sectionControls}
              variants={circleAnimation}
            >
              <div className="relative bg-white p-8 rounded-full shadow-lg w-56 h-56 flex items-center justify-center">
                <div className="absolute top-[-2rem] right-[-2rem] w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  <span>{step.step}</span>
                </div>
                <motion.div
                  className="text-center flex flex-col items-center mt-8"
                  initial="hidden"
                  animate={sectionControls}
                  variants={textAnimation}
                >
                  <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-[-2rem] transform -translate-y-1/2 text-red-600 text-2xl">
                  <span>→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkingProcess;
