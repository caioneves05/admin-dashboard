import { useState } from "react";

import * as Form from "@radix-ui/react-form";
import clsx from "clsx";

import { DocumentFormIcon } from "../DocumentFormIcon";
import { EyeOffIcon } from "../EyeOffIcon";
import { EyeOpenIcon } from "../EyeOpenIcon";
import { PasswordFormIcon } from "../PasswordFormIcon";

import { type InputFormProps } from "./types";

export const InputForm = ({ label, type, typeInputForm }: InputFormProps) => {
  const [isShowPassword, setISshowPassword] = useState(false);

  return (
    <Form.Root className="w-full">
      <Form.Field name="email" className="w-full">
        <div className="relative">
          <div
            className={clsx("absolute inset-y-0 left-3 flex items-center", {
              "text-gray-400": type === "document" || type === "password",
            })}
          >
            {type === "document" && <DocumentFormIcon size={22} />}
            {type === "password" && <PasswordFormIcon size={22} />}
          </div>

          <Form.Control asChild>
            <input
              className={clsx(
                "w-full rounded-xl border bg-colors-white-lilac-50 px-10 py-2 text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500",
                { "pr-12": type === "password" },
              )}
              type={typeInputForm}
              required
              placeholder={label}
            />
          </Form.Control>

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

        {/* Mensagens de validação */}
        <div className="mt-1 text-sm text-red-500">
          <Form.Message match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
      </Form.Field>
    </Form.Root>
  );
};
