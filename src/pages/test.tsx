import Link from 'next/link';
import { useState } from 'react';
import { trpc } from 'utils/trpc';

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
    <div>
      <header className="backdrop-blur fixed left-0 right-0">
        <nav className="border-b border-neutral-700">
          <div className="container mx-auto flex items-center justify-center px-4 py-3">
            <div className="flex items-center mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-gray-300"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>

              <i className="fa fa-home mr-2 text-gray-300 text-lg" />
              <a href="#" className="text-gray-300 text-lg">
                Home
              </a>
            </div>
            <div className="flex items-center mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-gray-300"
              >
                <path
                  fillRule="evenodd"
                  d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                  clipRule="evenodd"
                />
              </svg>

              <i className="fa fa-cog mr-2 text-gray-300 text-lg" />
              <a href="#" className="text-gray-300 text-lg">
                Features
              </a>
            </div>
            <div className="flex items-center mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-gray-300"
              >
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
                  clipRule="evenodd"
                />
              </svg>

              <i className="fa fa-dollar-sign mr-2 text-gray-300 text-lg" />
              <a href="#" className="text-gray-300 text-lg">
                Pricing
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="min-h-screen grid grid-rows-2 bg-black">
        <div className="row-span-1 flex items-center justify-center text-center">
          <div>
            <span className="px-0.5 tracking-tighter leading-tight text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              MindSync
              <br />A new way to
            </span>
            <span className="px-1 tracking-tighter text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-pink-600 to-pink-100">
              collaborate.
              {/* share, collaborate, synchronize */}
            </span>
            <br />
            <span className="px-1 tracking-tighter text-2xl bg-clip-text text-gray-300">
              Unleash the power of collective intelligence with MindSync - the
              ultimate real-time collaboration tool for notes and ideas.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
