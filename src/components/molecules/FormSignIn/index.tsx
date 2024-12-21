'use client';

import Link from 'next/link';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Logo } from 'components/atoms/Logo';
import { Button } from 'components/atoms/Button';
import { CheckBox } from 'components/atoms/CheckBox';
import { InputForm } from 'components/atoms/InputForm';

import { formSignInSchema, type FormSignInSchemaProps } from './types';

export const FormSignIn = () => {
  const [isRememberPassword, setIsRememberPassword] = useState(true);
  const {
    control,
    formState: { errors },
  } = useForm<FormSignInSchemaProps>({
    resolver: zodResolver(formSignInSchema),
    defaultValues: {
      document: '',
      password: '',
    },
  });

  return (
    <form
      className={`
        flex h-4/5 w-full flex-col items-center justify-center transition-all
      `}
    >
      <div
        className={`
          flex size-full flex-col items-center justify-center space-y-12 px-5
          md:w-2/5
        `}
      >
        <div
          className={`
            flex w-full justify-center
            md:justify-start
          `}
        >
          <Logo size={50} />
        </div>
        <div className="w-full space-y-10">
          <h2
            className={`
              relative z-20 text-left font-sans text-2xl font-bold
              tracking-[2px] text-black
              dark:text-white
              lg:text-5xl
              md:text-xl
            `}
          >
            <div
              className={`
                relative mx-auto inline-block w-max
                [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]
              `}
            >
              <div
                className={`
                  absolute left-0 top-px bg-gradient-to-r
                  from-colors-primary-500 via-colors-primary-800
                  to-colors-primary-950 bg-clip-text bg-no-repeat py-4
                  text-transparent
                  dark:drop-shadow-lg
                `}
              >
                <span className="">Embess flow</span>
              </div>
              <div
                className={`
                  relative bg-gradient-to-r from-colors-primary-500
                  via-colors-primary-800 to-colors-primary-950 bg-clip-text
                  bg-no-repeat py-4 text-transparent
                `}
              >
                <span className="">Embess flow</span>
              </div>
            </div>
          </h2>
          <h2
            className={`
              text-center font-poppins text-lg text-gray-400
              md:text-start
            `}
          >
            Enter your credentials to a ccess your account.
          </h2>
        </div>

        <div
          className={`
            flex w-full items-center
            md:w-[95%]
          `}
        >
          <div
            className={`
              grow border-t border-gray-300
              dark:border-gray-50/20
            `}
          />
          <span
            className={`
              mx-4 text-gray-300
              dark:text-gray-50/40
            `}
          >
            your credentials.
          </span>
          <div
            className={`
              grow border-t border-gray-300
              dark:border-gray-50/20
            `}
          />
        </div>

        <div
          className={`
            flex w-full flex-col items-center justify-center space-y-7
            md:w-[95%]
          `}
        >
          <div className="flex w-full flex-col space-y-3">
            <Controller
              render={({ field: { value, onChange } }) => (
                <InputForm
                  value={value}
                  type="document"
                  label="Document"
                  onChange={onChange}
                  typeInputForm="text"
                  messageError={errors.document?.message}
                />
              )}
              name="document"
              control={control}
            />

            <Controller
              render={({ field: { value, onChange } }) => (
                <InputForm
                  value={value}
                  type="password"
                  label="Password"
                  onChange={onChange}
                  typeInputForm="password"
                  messageError={errors.password?.message}
                />
              )}
              name="password"
              control={control}
            />
          </div>

          <div className="flex w-full flex-row items-center justify-between">
            <CheckBox
              label="Remember me"
              isRememberPassword={isRememberPassword}
              setIsRememberPassword={setIsRememberPassword}
            />

            <p className="text-sm text-colors-primary-600">
              Forgot your passowrd?
            </p>
          </div>

          <Link href="/dashboard" className="w-full pt-8">
            <Button isFullWidth>Login</Button>
          </Link>
        </div>
      </div>
    </form>
  );
};
