import * as React from "react";
const SvgArrowSidebarLeft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <rect
      width={31}
      height={31}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#DEDEE5"
      rx={9.5}
    />
    <path
      stroke="#252B42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18 11-5 5 5 5"
    />
  </svg>
);
export default SvgArrowSidebarLeft;
