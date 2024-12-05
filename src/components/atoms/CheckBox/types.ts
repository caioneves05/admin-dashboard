import { type Dispatch, type SetStateAction } from "react";

export type CheckBoxProps = {
  label: string;
  isRememberPassword: boolean;
  setIsRememberPassword: Dispatch<SetStateAction<boolean>>;
};
