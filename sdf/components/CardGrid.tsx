// components/CardGrid.tsx
"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cards } from "@/data";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, imageUrl, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black text-white text-lg font-bold"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            layout="fill"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            {title}
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-red-500 text-white p-4 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {description}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const CardGrid: FC = () => {
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
