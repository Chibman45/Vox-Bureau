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
      <defs>
        <clipPath id="clip-square">
          <rect x="48" y="32" width="360" height="360" />
        </clipPath>
      </defs>
      <g clipPath="url(#clip-square)">
        <path
          d="M 48 32 A 384 384 0 0 1 432 416"
          fill="none"
          stroke={dark}
          strokeWidth="200"
          strokeLinecap="butt"
        />
      </g>
      <circle cx="408" cy="392" r="32" fill={accent} />
    </svg>
  );
};

export default LogoSVG;
