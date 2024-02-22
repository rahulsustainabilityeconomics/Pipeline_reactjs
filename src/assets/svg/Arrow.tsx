import React, { useState } from "react";

const Arrow = ({color}:{color:any}) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <g id="arrow-forward" clip-path="url(#clip0_385_4660)">
        <path
          id="Vector"
          d="M1.25 7.5H13.75"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Vector_2"
          d="M6.25 13.75L1.25 7.5L6.25 1.25"
          stroke={color}
          stroke-width="1.2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>

      <defs>
        <clipPath id="clip0_385_4660">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="matrix(-1 0 0 -1 15 15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Arrow;
