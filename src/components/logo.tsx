import React from 'react';
import Image from 'next/image';

/**
 * LogoSVG
 * Props:
 *  - size: number (px)
 */
const LogoSVG = ({
  width = 32,
  height = 32,
  ...rest
}) => {
  return (
    <Image
      src="/image.svg"
      alt="Vox Bureau Logo"
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default LogoSVG;
