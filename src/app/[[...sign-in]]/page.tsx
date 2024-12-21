import { FormSignIn } from 'components/molecules/FormSignIn';
import { AuroraBackground } from 'components/molecules/AuroraBackground';
import { DarkModeSwitcher } from 'components/molecules/DarkModeSwitcher';
import { TypewriterEffectSmooth } from 'components/molecules/TypeWriterEffect';

const words = [
  {
    text: 'Building',
  },
  {
    text: 'soluctions',
  },
  {
    text: 'with',
  },
  {
    text: 'Embess.',
    className: 'text-blue-500 dark:text-blue-500',
  },
];

const LoginPage = () => (
  <div className="flex h-screen flex-row">
    <div
      className={`
        relative flex w-1/2 flex-col items-center justify-center
        bg-colors-white-lilac-50 transition-all
        dark:bg-zinc-900
      `}
    >
      <div className="absolute left-0 right-8 top-10 flex justify-end">
        <DarkModeSwitcher className="relative" />
      </div>
      <FormSignIn />
    </div>
    <AuroraBackground className="w-1/2">
      <div className="flex h-[40rem] flex-col items-center justify-center">
        <p
          className={`
            text-xs text-neutral-600 transition-all
            dark:text-neutral-200
            sm:text-base
          `}
        >
          The path to freedom starts here
        </p>
        <TypewriterEffectSmooth words={words} />
      </div>
    </AuroraBackground>
  </div>
);

export default LoginPage;
