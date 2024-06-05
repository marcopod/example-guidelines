import * as React from "react";

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#6F6F6F"
      strokeLinecap="round"
      d="m1 1 10.15 10.15M1.396 11.15 11.546 1"
    />
  </svg>
);

export default React.memo(SvgComponent);
