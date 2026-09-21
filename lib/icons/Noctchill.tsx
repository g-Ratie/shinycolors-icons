import type React from "react";
import type { IconProps } from "../types";

export const Noctchill: React.FC<IconProps> = ({
  size = 24,
  className,
  style,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 1000 1000"
      className={className}
      style={{ verticalAlign: "middle", ...style }}
    >
      <title>Noctchill icon</title>
      <defs>
        <clipPath id="noctchill-inner">
          <circle cx="500" cy="500" r="331" />
        </clipPath>
        <clipPath id="noctchill-outer">
          <circle cx="500" cy="500" r="405" />
        </clipPath>
      </defs>
      <circle cx="500" cy="500" r="498.5" fill="#615466" />
      <circle cx="500" cy="500" r="450" fill="#fff" />
      <circle cx="500" cy="500" r="405" fill="#4c4588" />
      <g clipPath="url(#noctchill-inner)">
        <circle cx="500" cy="500" r="331" fill="#fff" />
        <path
          d="M160 406 C360 415 531 445 840 443 L840 730 H160Z"
          fill="#c9e7f9"
        />
        <path
          d="M160 529 C480 529 689 478 840 491 L840 730 H160Z"
          fill="#8ccef3"
        />
        <path
          d="M160 583 C402 563 550 613 840 604 L840 730 H160Z"
          fill="#0083c9"
        />
      </g>
      <path
        d="M160 718 C478 726 601 631 840 634 L840 910 H160Z"
        fill="#4c4588"
        clipPath="url(#noctchill-outer)"
      />
    </svg>
  );
};
