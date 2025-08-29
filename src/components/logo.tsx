import React from 'react';

/**
 * LogoSVG
 * Props:
 *  - size: number (px)
 *  - dark: fill color for the main shape
 *  - accent: color for the dot
 */
const LogoSVG = ({
  size = 32,
  dark = 'hsl(var(--foreground))',
  accent = 'hsl(var(--accent))',
  ...rest
}) => {
  const vb = 480; // viewBox size

  return (
    <svg
      viewBox={`0 0 ${vb} ${vb}`}
      width={size}
      height={size}
      role="img"
      aria-label="Logo"
      {...rest}
    >
      <path
        d="M 100 100 L 100 300 C 100 300 100 400 200 400 L 300 400 C 400 400 400 300 400 300 L 400 220 L 300 220 L 300 300 C 300 300 300 320 250 320 L 200 320 C 180 320 180 300 180 300 L 180 100 Z"
        fill={dark}
       />
      <circle cx="360" cy="400" r="40" fill={accent} />
    </svg>
  );
};

export default LogoSVG;
