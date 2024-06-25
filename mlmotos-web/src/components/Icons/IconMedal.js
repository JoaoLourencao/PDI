import * as React from "react";
const SvgIconMedal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <g
      stroke="#008059"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M8.386 5.301a3.375 3.375 0 1 1-4.773 4.773 3.375 3.375 0 0 1 4.773-4.773" />
      <path d="m8.548 5.479 2.114-3.7a.562.562 0 0 0-.488-.841H8.255a.56.56 0 0 0-.488.283L6 4.313M3.452 5.479l-2.114-3.7a.562.562 0 0 1 .488-.841h1.919c.202 0 .388.108.488.283L6 4.313" />
    </g>
  </svg>
);
export default SvgIconMedal;
