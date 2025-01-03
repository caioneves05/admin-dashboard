import { type ButtonOAuthProps } from './types';

export const ButtonOAuth = ({ title }: ButtonOAuthProps) => (
  <button type="button" className="rounded-xl bg-red-500 px-14 py-3">
    <span>{title}</span>
  </button>
);
