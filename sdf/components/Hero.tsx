"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slides from "@/data";
import { slideShow, subtitleAnimation, descriptionAnimation, buttonAnimation } from "@/utils/Animations";
import Button from "@/components/Button"; // Adjust the import path as necessary

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 top-0 pt-20">
        <AnimatePresence>
          {slides.map((slide, index) =>
            index === currentSlide ? (
              <motion.div
                key={index}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={slideShow}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <motion.h2
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={subtitleAnimation}
                    className="text-white text-3xl sm:text-4xl font-semibold mt-4"
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={descriptionAnimation}
                    className="text-white text-lg mt-4 max-w-lg"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={buttonAnimation}
                    className="mt-8"
                  >
                    <Button href={slide.buttonLink} text={slide.buttonText} />
                  </motion.div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
