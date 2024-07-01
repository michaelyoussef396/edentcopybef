"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CiInstagram } from "react-icons/ci";
import { FaFacebookSquare, FaTiktok } from "react-icons/fa";

const Header = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-29 items-center justify-between px-8 bg-diagonal-split"
    >
      <div className="flex-1">
        <a href="./">
          <Image
            src="/title.png"
            alt="eden international"
            width={300}
            height={250}
            className="block p-8"
          />
        </a>
      </div>
      <div className="flex space-x-4 p-8">
        <a
          href="https://www.facebook.com/profile.php?id=61561459479275"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500"
        >
          <FaFacebookSquare size={30} />
        </a>
        <a
          href="https://www.instagram.com/eden.internationall/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500"
        >
          <CiInstagram size={30} />
        </a>
        <a
          href="https://www.tiktok.com/@eden.internationall"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-red-500"
        >
          <FaTiktok size={30} />
        </a>
      </div>
    </motion.nav>
  );
};

export default Header;
