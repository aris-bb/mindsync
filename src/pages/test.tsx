import Link from 'next/link';
import Header from 'components/Header';
import { useState } from 'react';
import { trpc } from 'utils/trpc';
import HeroHeading from 'components/HeroHeading';
import AnimatedText from 'components/AnimatedText';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';

export default function AboutPage() {
  const [num, setNumber] = useState<number>();
  trpc.randomNumber.useSubscription(undefined, {
    onData(n) {
      setNumber(n);
    },
  });

  return (
    // <div>
    //   Here&apos;s a random number from a sub: {num} <br />
    //   <Link href="/">Index</Link>
    // </div>
    <div className="min-h-screen min-w-screen bg-black">
      <Header />

      <div className="text-center py-20">
        <HeroHeading>MindSync</HeroHeading>
        <HeroHeading>A new way to</HeroHeading>

        <h1 className="animated-text tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          <AnimatedText className="from-pink-600 to-pink-100">
            collaborate.h
          </AnimatedText>
          <AnimatedText className="from-purple-600 to-purple-100">
            coordinate.
          </AnimatedText>
          <AnimatedText className="from-indigo-600 to-indigo-100">
            synchronize.
          </AnimatedText>
        </h1>

        <p className="pt-10 pb-24 lg:px-32 tracking-tighter text-2xl bg-clip-text text-gray-300">
          Unleash the power of collective intelligence with MindSync - the
          ultimate real-time collaboration tool for notes and ideas.
        </p>
        <div className="my-button-wrapper">
          <Link className="my-button" href="#">
            Button
          </Link>
          <div className="my-button-border"></div>
        </div>
        {/* <Link className="my-button" href="#">
          Explore
        </Link> */}
        {/* <div className="rounded-full bg-gradient-to-r p-0.5 from-pink-600 via-purple-600 to-indigo-600">
          <Link
            className="text-white text-3xl mx-auto justify-center bg-black rounded-full p-4"
            href="#"
          >
            Explore
          </Link>
        </div> */}
      </div>
    </div>
  );
}
