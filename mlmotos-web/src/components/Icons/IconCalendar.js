import * as React from "react";
const SvgIconCalendar = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g
      stroke="#252B42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M4.374 1.748v1.75M9.626 1.748v1.75M1.748 5.541h10.504" />
      <rect width={10.504} height={9.629} x={1.748} y={2.623} rx={3} />
    </g>
  </svg>
);
export default SvgIconCalendar;
