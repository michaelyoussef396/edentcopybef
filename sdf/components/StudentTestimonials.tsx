// components/StudentTestimonials.tsx
"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { testimonials } from "@/data";

export function StudentTestimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-gradient-to-b from-white to-gray-400 items-center justify-center relative overflow-hidden">
      <h2 className="text-black text-4xl font-bold mb-4">
        What Our <span className="text-red-500">Students Say</span>
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
