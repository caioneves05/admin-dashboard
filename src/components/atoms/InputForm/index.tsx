import type InputMask from 'react-input-mask';
import { useState, forwardRef, type ForwardRefRenderFunction } from 'react';

import clsx from 'clsx';

import { EyeOffIcon } from 'components/atoms/EyeOffIcon';
import { EyeOpenIcon } from 'components/atoms/EyeOpenIcon';
import { DocumentFormIcon } from 'components/atoms/DocumentFormIcon';
import { PasswordFormIcon } from 'components/atoms/PasswordFormIcon';

import { type InputFormProps } from './types';

const InputRef: ForwardRefRenderFunction<
  HTMLInputElement & InputMask,
  InputFormProps
> = (
  { type, label, className, messageError, typeInputForm, ...props },
  ref,
) => {
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={clsx('absolute inset-y-0 left-3 flex items-center', {
            'text-gray-400': type === 'document' || type === 'password',
          })}
        >
          {type === 'document' && <DocumentFormIcon size={22} />}
          {type === 'password' && <PasswordFormIcon size={22} />}
        </div>

        <div>
          <input
            {...props}
            type={
              type === 'password' && isShowPassword ? 'text' : typeInputForm
            }
            className={clsx(
              `
                w-full rounded-xl border bg-colors-white-lilac-50 px-10 py-2
                text-gray-700 transition-all
                dark:border-zinc-900 dark:bg-zinc-800
                focus:outline-none focus:ring-2 focus:ring-blue-500
                placeholder:text-gray-500
              `,
              { 'pr-12': type === 'password' },
            )}
            ref={ref}
            placeholder={label}
            required
          />
        </div>

        {type === 'password' && (
          <button
            className={`
              absolute inset-y-0 right-3 flex items-center text-gray-500
              focus:outline-none
            `}
            type="button"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <EyeOpenIcon size={20} />
            ) : (
              <EyeOffIcon size={20} />
            )}
          </button>
        )}
      </div>

      {!!messageError && (
        <span
          className={`
            mt-2 inline-block font-poppins text-[0.813rem] text-red-500
          `}
        >
          {messageError}
        </span>
      )}
    </div>
  );
};

export const InputForm = forwardRef(InputRef);
