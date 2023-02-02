import Link from 'next/link';
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
    <main className="min-h-screen min-w-screen bg-black">
      <div className="text-center py-32 border-b border-zinc-800">
        <h1 className="tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          MindSync
        </h1>

        <h2 className="tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
          A new way to
          <div className="animated-text">
            <span className="bg-clip-text bg-gradient-to-br from-pink-600 to-pink-100">
              collaborate.
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-purple-600 to-purple-100">
              coordinate.
            </span>
            <span className="bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-100">
              synchronize.
            </span>
          </div>
        </h2>

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
    </main>
  );
}
