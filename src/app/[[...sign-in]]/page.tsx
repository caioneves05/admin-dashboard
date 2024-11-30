"use client";

import { LoginSvg } from "@/components/atoms/LoginSvg";

const LoginPage = () => (
  <div className="flex h-screen items-center justify-center bg-lamaSkyLight">
    <div className="h-3/4 w-[30%] rounded-l-xl bg-white" />
    <div className="h-3/4 w-[30%] rounded-r-xl bg-blue-600">
      <LoginSvg />
    </div>
  </div>
);

export default LoginPage;
