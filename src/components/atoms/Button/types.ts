import { ButtonHTMLAttributes } from "react";

type ButtonTypesProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  title: string;
} & ButtonTypesProps
