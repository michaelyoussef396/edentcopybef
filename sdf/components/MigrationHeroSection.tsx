"use client"
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/Animations';

interface HeroSectionProps {
  imageSrc: StaticImageData;
  title: string;
  highlightText: string;
  height: string;
}

const MigrationHeroSection: React.FC<HeroSectionProps> = ({ imageSrc, title, highlightText, height }) => {
  return (
    <motion.div
      className={`relative ${height}`}
      initial={fadeIn.initial}
      animate={fadeIn.animate}
      transition={fadeIn.transition}
    >
      <Image
        src={imageSrc}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          {title}
        </h1>
        <h2 className="text-4xl font-bold text-red-500">
        {highlightText}
          </h2>
        </div>
      </div>
    </motion.div>
  );
};

export default MigrationHeroSection;
