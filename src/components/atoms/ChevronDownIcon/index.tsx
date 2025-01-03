import { type SVGAttributes } from 'react';

type Props = {} & SVGAttributes<SVGElement>;

export const ChevronDownIcon = ({ ...props }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="fill-red-500"
      d="m6.293 10.707 1.414-1.414L12 13.586l4.293-4.293 1.414 1.414L12 16.414z"
    />
  </svg>
);
