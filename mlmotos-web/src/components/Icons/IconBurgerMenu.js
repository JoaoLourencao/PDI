import * as React from "react";
const SvgIconBurgerMenu = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#252B42">
      <rect width={20} height={1.5} x={2} y={4.25} rx={0.75} />
      <rect width={20} height={1.5} x={2} y={11.25} rx={0.75} />
      <rect width={20} height={1.5} x={2} y={18.25} rx={0.75} />
    </g>
  </svg>
);
export default SvgIconBurgerMenu;
