import React from 'react';

interface ReusableComponentProps {
  backgroundColor: string;
  height: string;
  title: string;
  highlightText: string;
  content: string;
  textColor: string;
  highlightColor: string;
  overlayColor?: string;
}

const InfoReusable: React.FC<ReusableComponentProps> = ({
  backgroundColor,
  height,
  title,
  highlightText,
  content,
  textColor,
  highlightColor,
  overlayColor
}) => {
  return (
    <div className={`relative ${height} ${backgroundColor}`}> {/* Adjust the height as needed */}
      {overlayColor && <div className={`absolute inset-0 ${overlayColor} flex flex-col items-center justify-center px-4`}></div>}
      <div className={`absolute inset-0 flex flex-col items-center justify-center px-4 ${overlayColor ? '' : 'bg-opacity-0'}`}>
        <h1 className={`text-4xl md:text-5xl font-bold ${textColor} mb-4`}>
          {title} <span className={highlightColor}>{highlightText}</span>
        </h1>
        <p className={`text-lg ${textColor} text-center max-w-2xl`} dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  );
};

export default InfoReusable;
