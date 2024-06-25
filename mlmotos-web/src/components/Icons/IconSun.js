import * as React from "react";
const SvgIconSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#02AFBC"
      fillRule="evenodd"
      d="M11.652 6.348a3.75 3.75 0 1 1-5.304 5.304 3.75 3.75 0 0 1 5.304-5.304"
      clipRule="evenodd"
    />
    <path
      stroke="#03AFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.652 6.348a3.75 3.75 0 1 1-5.304 5.304 3.75 3.75 0 0 1 5.304-5.304"
    />
    <path
      stroke="#02AFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 3V1.5M9 16.5V15M13.77 4.23l.533-.533M3.698 14.303l.532-.533M15 9h1.5M1.5 9H3M13.77 13.77l.533.533M3.698 3.698l.532.532"
    />
  </svg>
);
export default SvgIconSun;
