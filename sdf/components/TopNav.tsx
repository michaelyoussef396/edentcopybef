"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TopNav = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-15 bg-black text-white p-4 flex justify-between items-center pl-12"
    >
      <div className="flex items-center space-x-2">
        <Image src="/mail.png" alt="mail" width={20} height={20} />
        <a href="mailto:info@edeninternational@gmail.com" className="hover:underline">info@edeninternational@gmail.com</a>
      </div>
      <div className="flex items-center space-x-2 pr-12">
        <Image src="/phone.png" alt="phone" width={20} height={20} />
        <span>+61 452 031 982</span>
      </div>
    </motion.div>
  );
};

export default TopNav;
