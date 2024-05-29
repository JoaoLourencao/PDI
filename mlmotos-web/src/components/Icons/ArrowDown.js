import * as React from "react";
const SvgArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 5 4 4 4-4"
    />
  </svg>
);
export default SvgArrowDown;
