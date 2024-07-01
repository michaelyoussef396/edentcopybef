"use client";
import { OnShores, OffShores } from "@/data";
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromTop, slideInFromBottom, slideInFromLeft, slideInFromRight } from '@/utils/Animations';
import Image from 'next/image';

const ShoreServices: React.FC = () => {
  const titleControls = useAnimation();
  const subtitleControls = useAnimation();
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true });
  const { ref: subtitleRef, inView: subtitleInView } = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (titleInView) {
      titleControls.start('visible');
    }
    if (subtitleInView) {
      subtitleControls.start('visible');
    }
  }, [titleControls, titleInView, subtitleControls, subtitleInView]);

  return (
    <div className="container mx-auto py-16 space-y-16">
      {/* On Shore Services */}
      <div>
        <motion.h2
          ref={titleRef}
          className="text-4xl font-bold text-center mb-12"
          initial="hidden"
          animate={titleControls}
          variants={slideInFromTop}
        >
          <span className="text-black">OUR ON SHORE </span>
          <span className="text-red-500">SERVICES</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OnShores.map((OnShore, index) => {
            const animationVariant = index % 2 === 0 ? slideInFromLeft : slideInFromRight;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg shadow-md bg-gray-100 text-black"
                initial="hidden"
                animate="visible"
                variants={animationVariant}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image src={OnShore.icon} alt={OnShore.title} className="w-16 h-16 mx-auto mb-4" width={300} height={300} />
                <h3 className="text-xl font-semibold mb-4">{OnShore.title}</h3>
                <p>{OnShore.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Off Shore Services */}
      <div>
        <motion.h2
          ref={titleRef}
          className="text-4xl font-bold text-center mb-2"
          initial="hidden"
          animate={titleControls}
          variants={slideInFromTop}
        >
          <span className="text-black">OUR OFF SHORE </span>
          <span className="text-red-500">SERVICES</span>
        </motion.h2>
        <motion.p
          ref={subtitleRef}
          className="text-center text-lg mb-12 text-black"
          initial="hidden"
          animate={subtitleControls}
          variants={slideInFromBottom}
        >
          FOR INTERNATIONAL STUDENTS
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {OffShores.map((OffShore, index) => {
            const animationVariant = index % 2 === 0 ? slideInFromLeft : slideInFromRight;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-lg shadow-md bg-gray-100 text-black"
                initial="hidden"
                animate="visible"
                variants={animationVariant}
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Image src={OffShore.icon} alt={OffShore.title} className="w-16 h-16 mx-auto mb-4" width={300} height={300}/>
                <h3 className="text-xl font-semibold mb-4">{OffShore.title}</h3>
                <p>{OffShore.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoreServices;
