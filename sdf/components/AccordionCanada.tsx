// components/AccordionCanada.tsx
"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import htmlParser from 'html-react-parser';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-left text-xl font-medium text-gray-900 bg-red-500 hover:bg-red-600 focus:outline-none focus:bg-red-600"
      >
        <span className="flex items-center">
          {isOpen ? (
            <span className="mr-2">-</span>
          ) : (
            <span className="mr-2">+</span>
          )}
          {title}
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && <div className="p-4 bg-white text-gray-900">{htmlParser(content)}</div>}
      </motion.div>
    </div>
  );
};

interface AccordionProps {
  items: AccordionItemProps[];
}

const AccordionCanada: FC<AccordionProps> = ({ items }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-8 md:px-20">
        <h2 className="text-5xl font-bold text-center mb-8">
          TOP REASONS TO CHOOSE <span className="text-red-500">CANADA</span>
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/contact-us">
          <button className="px-6 py-3 text-white bg-red-500 hover:bg-red-600 font-bold">
            GET A FREE INITIAL ASSESSMENT OF YOUR ELIGIBILITY
          </button>        
          </a>
        </div>
      </div>
    </section>
  );
};

export default AccordionCanada;
