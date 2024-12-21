import { CheckIcon } from '@radix-ui/react-icons';
import * as Checkbox from '@radix-ui/react-checkbox';

import { type CheckBoxProps } from './types';

export const CheckBox = ({
  label,
  isRememberPassword,
  setIsRememberPassword,
}: CheckBoxProps) => (
  <div className="flex items-center space-x-2">
    <Checkbox.Root
      onCheckedChange={() => {
        setIsRememberPassword(true);
      }}
      className={`
        flex size-6 items-center justify-center rounded-md border
        bg-colors-primary-500 transition-all
        dark:border-zinc-700
        focus:outline-none focus:ring-2 focus:ring-blue-500
      `}
      id="c1"
      checked={isRememberPassword}
    >
      <Checkbox.Indicator>
        <CheckIcon className="size-5 text-white" />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);
