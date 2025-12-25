import React from 'react';

export interface AddLineProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AddLine: React.FC<AddLineProps> = ({
  size = 24,
  color = 'currentColor',
  className,
  style,
}) => {
  const svgProps: React.SVGProps<SVGSVGElement> = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    style: { verticalAlign: 'middle', ...style },
  };

  return (
    <svg {...svgProps}>
      <path d="M21 11.2H12.7V3H11.2V11.2H3V12.7H11.2V21H12.7V12.7H21V11.2Z" fill={color} />
    </svg>
  );
};

AddLine.displayName = 'AddLine';