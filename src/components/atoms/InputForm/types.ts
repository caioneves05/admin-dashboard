import { type HTMLInputTypeAttribute, type InputHTMLAttributes } from "react";

export type InputFormProps = {
  label: string;
  messageError?: string;
  type: "document" | "password";
  typeInputForm?: HTMLInputTypeAttribute;
} & InputHTMLAttributes<HTMLInputElement>;
