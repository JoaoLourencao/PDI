import * as React from "react";
const SvgGraph = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#707589"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 19h20M4.5 19v-5M9.5 19v-9M14.5 19V5M19.5 19v-7"
    />
  </svg>
);
export default SvgGraph;
