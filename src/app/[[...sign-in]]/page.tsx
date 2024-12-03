"use client";

import { LoginSvg } from "@/components/atoms/LoginSvg";

const LoginPage = () => (
  <div className="flex h-screen items-center justify-center bg-lamaSkyLight">
    <div className="flex h-3/4 w-3/5 space-x-2 rounded-3xl bg-white p-5">
      <div className="mt-40 flex h-full w-1/2 flex-col items-center px-24">
        <div className="w-full space-y-2">
          <h1 className="text-start font-poppins text-4xl text-black">
            Get Started Now
          </h1>
          <h1 className="text-start font-poppins text-lg text-black">
            Enter your credentials to access your account
          </h1>
        </div>
      </div>
      <div className="ml-auto flex h-full w-1/2 flex-col items-center justify-center rounded-3xl bg-blue-600">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="space-y-3 px-14">
            <h1 className="text-start font-poppins text-4xl text-white">
              The simplest way to manage your workforce
            </h1>
            <h1 className="text-start font-poppins text-lg text-white">
              Enter your credentials to access your account
            </h1>
          </div>

          <div>
            <LoginSvg width={600} height={350} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
