"use client";

import { useState } from "react";

import { Button } from "@/components/atoms/Button";
import { CheckBox } from "@/components/atoms/CheckBox";
import { InputForm } from "@/components/atoms/InputForm";
import { LoginSvg } from "@/components/atoms/LoginSvg";
import { SimbaIcon } from "@/components/atoms/SimbaIcon";

const LoginPage = () => {
  const [isRememberPassword, setIsRememberPassword] = useState(true);

  return (
    <div className="flex h-screen items-center justify-center bg-lamaSkyLight font-poppins shadow-[2px_6px_14px_1px_rgba(0,_0,_0,_0.1)]">
      <div className="flex h-3/4 w-[55%] space-x-2 rounded-3xl bg-white p-5 ">
        <div className="mt-40 flex h-full w-1/2 flex-col space-y-10 px-24">
          <div className="w-full">
            <SimbaIcon width={50} height={65} />
          </div>
          <div className="w-full space-y-2 pb-8">
            <h1 className="text-start font-poppins text-4xl text-colors-smoke-800">
              Get Started Now
            </h1>
            <h2 className="text-start font-poppins text-lg text-gray-400">
              Enter your credentials to access your account
            </h2>
          </div>

          <div className="flex w-[85%] flex-col items-center justify-center space-y-3">
            <InputForm label="Documento" type="document" typeInputForm="text" />
            <InputForm label="Senha" type="password" typeInputForm="password" />

            <div className="flex w-full flex-row items-center justify-between pt-1">
              <CheckBox
                isRememberPassword={isRememberPassword}
                setIsRememberPassword={setIsRememberPassword}
                label="Remember me"
              />

              <p className="text-base text-colors-primary-500">
                Forgot password?
              </p>
            </div>

            <div className="w-full pt-8">
              <Button title="Login" />
            </div>
          </div>
        </div>

        <div className="ml-auto flex h-full w-1/2 flex-col items-center justify-center rounded-3xl bg-colors-primary-500 ">
          <div className="flex flex-col items-center justify-center space-y-16">
            <div className="space-y-3 px-14">
              <h1 className="text-start font-poppins text-4xl text-white">
                The simplest way to manage your workforce
              </h1>
              <h2 className="text-start font-poppins text-lg text-white">
                Enter your credentials to access your account
              </h2>
            </div>
            <LoginSvg width={600} height={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
