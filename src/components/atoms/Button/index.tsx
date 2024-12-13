import { forwardRef, ForwardRefRenderFunction } from "react";
import { type ButtonProps } from "./types";

const ButtonRef: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { title, ...props },
  ref
) => (
  <button
    ref={ref}
    className="w-full rounded-xl bg-colors-primary-500 py-3"
    type="button"
    {...props}
  >
    <span className="text-white">{title}</span>
  </button>
);

export const Button = forwardRef(ButtonRef);