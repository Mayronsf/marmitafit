import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`p-4 pt-0 ${className}`}>{children}</div>;
};

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  return <div className={`p-4 bg-gray-50 ${className}`}>{children}</div>;
};

export const CardImage: React.FC<{ 
  src: string; 
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide';
}> = ({ 
  src, 
  alt,
  className = '',
  aspectRatio = 'square'
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[16/9]'
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatioClasses[aspectRatio]} ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" 
      />
    </div>
  );
};

export default Card;