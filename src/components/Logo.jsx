import React from 'react';
import logoImage from '../assets/logo.png';

const Logo = ({ size = 'large' }) => {
  const sizeMap = {
    small: { width: '100px', height: '30px' },
    medium: { width: '200px', height: '60px' },
    large: { width: '450px', height: '200px' }
  };

  const dimensions = sizeMap[size] || sizeMap.large;

  return (
    <img 
      src={logoImage} 
      alt="Natalia Show Logo" 
      style={{
        width: dimensions.width,
        height: dimensions.height,
        objectFit: 'contain'
      }}
    />
  );
};

export default Logo;