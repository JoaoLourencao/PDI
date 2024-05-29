import * as React from "react";
const SvgArrowSidebarRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    style={{
      border: "2px solid #e3e6e8",
      borderRadius: 100,
      backgroundColor: "#f9fafa",
    }}
    viewBox="-2 -2 36 36"
    {...props}
  >
    <path
      fill="#fff"
      d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16"
    />
    <path
      stroke="#071926"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 20 4-4-4-4"
    />
  </svg>
);
export default SvgArrowSidebarRight;
