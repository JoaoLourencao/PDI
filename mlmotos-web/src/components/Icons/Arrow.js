import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <rect width={42} height={42} fill="#fff" rx={8} />
    <path
      stroke="#252B42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 16 5 5-5 5"
    />
  </svg>
);
export default SvgArrow;
