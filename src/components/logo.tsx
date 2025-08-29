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
        d="M 64 64 L 192 320 L 448 96"
        fill="none"
        stroke={dark}
        strokeWidth="96"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      <circle cx="416" cy="96" r="32" fill={accent} />
    </svg>
  );
};

export default LogoSVG;
