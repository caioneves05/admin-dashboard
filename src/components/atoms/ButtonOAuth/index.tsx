import { type ButtonOAuthProps } from "./types";

export const ButtonOAuth = ({ title }: ButtonOAuthProps) => (
  <button className="rounded-xl bg-red-500 px-14 py-3" type="button">
    <span>{title}</span>
  </button>
);
