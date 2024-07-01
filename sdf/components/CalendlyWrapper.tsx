// components/CalendlyWrapper.tsx
'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyWrapper = () => {
  return (
    <div>
      <InlineWidget url="https://calendly.com/michaelyoussef396" />
    </div>
  );
};

export default CalendlyWrapper;
