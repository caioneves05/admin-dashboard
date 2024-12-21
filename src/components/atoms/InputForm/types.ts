import { type InputHTMLAttributes, type HTMLInputTypeAttribute } from 'react';

export type InputFormProps = {
  label: string;
  messageError?: string;
  type: 'document' | 'password';
  typeInputForm?: HTMLInputTypeAttribute;
} & InputHTMLAttributes<HTMLInputElement>;
