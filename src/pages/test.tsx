import Link from 'next/link';
import Header from 'components/Header';
import { useState } from 'react';
import { trpc } from 'utils/trpc';
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
    <div className="min-h-screen bg-black">
      <Header />
      <div className="flex items-center justify-center text-center py-32">
        <div>
          <h1 className="tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            MindSync
          </h1>
          <h1 className="tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            A new way to
          </h1>
          <h1 className="animated-text tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            <span className="px-1 tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-600 to-pink-100">
              collaborate.
            </span>
            <span className="px-1 tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-600 to-purple-100">
              coordinate.
            </span>
            <span className="px-1 tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-600 to-indigo-100">
              synchronize.
            </span>
          </h1>
          <p className="px-1 py-10 tracking-tighter text-2xl bg-clip-text text-gray-300">
            Unleash the power of collective intelligence with MindSync - the
            ultimate real-time collaboration tool for notes and ideas.
          </p>
          {/* <ArrowDownCircleIcon className="w-8 h-8 fill-gray-300" />
          <Link className="text-white text-3xl border-y border-x" href="#">
            Explore
          </Link> */}
          {/* button named "Explore" */}
        </div>
      </div>
    </div>
  );
}
