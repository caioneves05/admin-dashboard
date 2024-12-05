import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { type CheckBoxProps } from "./types";

export const CheckBox = ({
  label,
  isRememberPassword,
  setIsRememberPassword,
}: CheckBoxProps) => (
  <div className="flex items-center space-x-2">
    <Checkbox.Root
      id="c1"
      className="flex size-6 items-center justify-center rounded-md border bg-colors-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      checked={isRememberPassword}
      onCheckedChange={() => {
        setIsRememberPassword(true);
      }}
    >
      <Checkbox.Indicator>
        <CheckIcon className="size-5 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <p className="text-base text-gray-400">{label}</p>
  </div>
);
