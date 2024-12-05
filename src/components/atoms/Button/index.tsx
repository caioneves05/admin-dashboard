import { type ButtonProps } from "./types";

export const Button = ({ title }: ButtonProps) => (
  <button
    className="w-full rounded-xl bg-colors-primary-500 py-3"
    type="button"
  >
    <span className="text-white">{title}</span>
  </button>
);
