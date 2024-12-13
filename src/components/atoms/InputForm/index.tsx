import { useState, forwardRef, ForwardRefRenderFunction } from "react";
import clsx from "clsx";
import InputMask from 'react-input-mask';

import { DocumentFormIcon } from "../DocumentFormIcon";
import { EyeOffIcon } from "../EyeOffIcon";
import { EyeOpenIcon } from "../EyeOpenIcon";
import { PasswordFormIcon } from "../PasswordFormIcon";

import { type InputFormProps } from "./types";

const InputRef: ForwardRefRenderFunction<
  HTMLInputElement & InputMask,
  InputFormProps
> = ({
  label,
  typeInputForm,
  size = 'default',
  type,
  messageError,
  className,
  ...props
},
ref,) => {
  const [isShowPassword, setISshowPassword] = useState(true);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          className={clsx("absolute inset-y-0 left-3 flex items-center", {
            "text-gray-400": type === "document" || type === "password",
          })}
        >
          {type === "document" && <DocumentFormIcon size={22} />}
          {type === "password" && <PasswordFormIcon size={22} />}
        </div>

        <div>
          <input
            {...props}
            ref={ref}
            className={clsx(
              "w-full rounded-xl border bg-colors-white-lilac-50 px-10 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
              { "pr-12": type === "password" },
            )}
            type={type === "password" && isShowPassword ? "text" : typeInputForm}
            required
            placeholder={label}
          />
        </div>

        {type === "password" && (
          <button
            type="button"
            onClick={() => setISshowPassword(!isShowPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
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
        <span className="mt-2 inline-block font-PublicSans text-[0.813rem] text-red-500">
          {messageError}
        </span>
      )}
    </div>
  );
};

export const InputForm = forwardRef(InputRef);