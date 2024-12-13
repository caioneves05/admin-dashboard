/* eslint-disable import/no-default-export */

"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { Button } from "@/components/atoms/Button";
import { CheckBox } from "@/components/atoms/CheckBox";
import { InputForm } from "@/components/atoms/InputForm";
import { SimbaIcon } from "@/components/atoms/SimbaIcon";
import { zodResolver } from "@hookform/resolvers/zod";

import { AuroraBackground } from "../AuroraBackground";

import { formSignInSchema, type FormSignInSchemaProps } from "./types";

const FormSignIn = () => {
  const [isRememberPassword, setIsRememberPassword] = useState(true);
  const {
    control,
    formState: { errors },
  } = useForm<FormSignInSchemaProps>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      document: "",
      password: "",
    },
  });

  return (
    <div
      // onSubmit={handleSubmit(onSubmit)}
      className="flex h-[85%] w-full max-w-7xl flex-col space-x-0 rounded-3xl bg-white p-3 md:flex-row md:space-x-2"
    >
      <div className="mt-10 flex size-full flex-col space-y-8 px-5 md:w-[70%] md:px-24">
        <div className="flex w-full justify-center  md:justify-start">
          <SimbaIcon width={50} height={65} />
        </div>
        <div className="w-full space-y-2">
          <h1 className="text-center font-poppins text-4xl text-colors-smoke-800 md:text-start">
            Get Started Now
          </h1>
          <h2 className="text-center font-poppins text-lg text-gray-400 md:text-start">
            Enter your credentials to access your account
          </h2>
        </div>

        <div className="flex w-full items-center md:w-[95%]">
          <div className="grow border-t border-colors-athens-gray-400" />
          <span className="mx-4 text-gray-300">your credentials</span>
          <div className="grow border-t border-colors-athens-gray-400" />
        </div>

        <div className="flex w-full flex-col items-center justify-center space-y-3 md:w-[95%]">
          <Controller
            name="document"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputForm
                value={value}
                label="Documento"
                onChange={onChange}
                type="document"
                typeInputForm="text"
                messageError={errors.document?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <InputForm
                value={value}
                onChange={onChange}
                label="Senha"
                type="password"
                typeInputForm="password"
                messageError={errors.password?.message}
              />
            )}
          />

          <div className="flex w-full flex-row items-center justify-between">
            <CheckBox
              isRememberPassword={isRememberPassword}
              setIsRememberPassword={setIsRememberPassword}
              label="Remember me"
            />

            <p className="text-sm text-colors-primary-600">Forgot password?</p>
          </div>

          <div className="w-full pt-8">
            <Button
              title="Login"
              type="submit"
              // onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>
      </div>

      <AuroraBackground className="ml-auto mt-10 flex size-full flex-1 flex-col items-center justify-center rounded-3xl md:mt-0">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="space-y-5 px-5 md:px-14">
            <h1 className="text-center font-poppins text-5xl font-semibold text-white md:text-start">
              The simplest way to manage your workforce
            </h1>
            <h2 className="text-center font-poppins text-2xl font-extralight text-white md:text-start">
              Enter your credentials to access your account
            </h2>
          </div>
          <div className="flex items-center justify-center" />
        </div>
      </AuroraBackground>
    </div>
  );
};

export default FormSignIn;
