import * as React from "react";
const SvgNoPhotoAvailableLight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <circle cx={21} cy={21} r={21} />
    <path
      stroke="#252B42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M27.667 27.667v-.625a3.54 3.54 0 0 0-3.542-3.542h-6.25a3.54 3.54 0 0 0-3.542 3.542v.625"
    />
    <circle
      cx={21}
      cy={16.833}
      r={3.333}
      stroke="#252B42"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgNoPhotoAvailableLight;
