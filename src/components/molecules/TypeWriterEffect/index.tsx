'use client';

import { useEffect } from 'react';

import { motion, stagger, useInView, useAnimate } from 'framer-motion';

import { cn } from 'utils/tailwind/cn';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  className?: string;
  cursorClassName?: string;
  words: {
    text: string;
    className?: string;
  }[];
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map(word => ({
    ...word,
    text: word.text.split(''),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          opacity: 1,
          width: 'fit-content',
          display: 'inline-block',
        },
        {
          duration: 0.3,
          ease: 'easeInOut',
          delay: stagger(0.1),
        },
      );
    }
  }, [isInView]);

  const renderWords = () => (
    <motion.div ref={scope} className="inline">
      {wordsArray.map((word, index) => (
        <div key={`word-${index}`} className="inline-block">
          {word.text.map(char => (
            <motion.span
              className={cn(
                `
                  hidden text-black opacity-0
                  dark:text-white
                `,
                word.className,
              )}
              initial={{}}
              key={`char-motion-${index}`}
            >
              {char}
            </motion.span>
          ))}
          &nbsp;
        </div>
      ))}
    </motion.div>
  );

  return (
    <div
      className={cn(
        `
          text-center text-base font-bold
          lg:text-5xl
          md:text-3xl
          sm:text-xl
        `,
        className,
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          `
            inline-block h-4 w-[4px] rounded-sm bg-blue-500
            lg:h-10
            md:h-6
          `,
          cursorClassName,
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  className?: string;
  cursorClassName?: string;
  words: {
    text: string;
    className?: string;
  }[];
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map(word => ({
    ...word,
    text: word.text.split(''),
  }));

  const renderWords = () => (
    <div>
      {wordsArray.map((word, index) => (
        <div key={`word-${index}`} className="inline-block">
          {word.text.map((char, charIndex) => (
            <span
              className={cn(
                `
                  text-black transition-all
                  dark:text-white
                `,
                word.className,
              )}
              key={`char-${charIndex}`}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn('my-6 flex space-x-1', className)}>
      <motion.div
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          delay: 1,
          duration: 2,
          ease: 'linear',
        }}
        className="overflow-hidden pb-2"
      >
        <div
          style={{
            whiteSpace: 'nowrap',
          }}
          className="text-5xl font-bold"
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          `
            block h-4 w-[4px] rounded-sm bg-blue-500
            sm:h-6
            xl:h-12
          `,
          cursorClassName,
        )}
      />
    </div>
  );
};
