import React from "react";

const Close = ({ color }: { color: any }) => {
  return (
    <>
      <svg
        width="22"
        height="22"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="21"
          cy="21"
          r="19"
          fill="none"
          stroke={color}
          style={{ strokeWidth: "3" }}
        ></circle>
        <circle cx="21" cy="21" r="21" fill="none" />
        <path
          d="M11.9189 11.9189L30.6487 30.6487"
          stroke={color}
          style={{ strokeWidth: "3", strokeLinecap: "round" }}
        />
        <path
          d="M11.9189 11.9189L30.6487 30.6487"
          stroke={color}
          style={{ strokeWidth: "3", strokeLinecap: "round" }}
        />
        <path
          d="M30.6484 11.9189L11.9187 30.6487"
          stroke={color}
          style={{ strokeWidth: "3", strokeLinecap: "round" }}
        />
        <path
          d="M30.6484 11.9189L11.9187 30.6487"
          stroke={color}
          style={{ strokeWidth: "3", strokeLinecap: "round" }}
        />
      </svg>
    </>
  );
};

export default Close;
