import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import {
  UsersIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import styles from "@/styles/Test.module.css";
import Card from "@/components/Card";
import "react-quill/dist/quill.snow.css";
import EditorModal from "@/components/EditorModal";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

// import dynamic from "next/dynamic";
// const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("null");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>MindSync</title>
        <meta
          name="description"
          content="The ultimate real-time collaboration tool for notes and ideas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen min-w-screen bg-black">
        {/* Hero */}
        {/* <QuillNoSSRWrapper></QuillNoSSRWrapper> */}
        <div className="text-center py-32">
          <h1 className="pb-4 translate-y-4 tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            MindSync
          </h1>
          <h2 className="relative tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
            <div className="blur-3xl absolute left-1/2 transform -translate-x-[45%] -translate-y-1/2 w-full max-w-2xl white-box">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1366.95 424.55"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="878.44"
                    y1="706.01"
                    x2="456.77"
                    y2="-24.34"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#f9c" />
                    <stop offset="1" stopColor="#9089fc" />
                  </linearGradient>
                </defs>
                <path
                  d="m.78,313.66c301.8-506.9,970.25-28.73,1366,110.41-10.46-2.37-1606.04-357.9-927.81-110.41,680.45,248.31-438.19,0-438.19,0Z"
                  style={{
                    fill: "url(#linear-gradient)",
                    stroke: "#fff",
                    strokeMiterlimit: 10,
                  }}
                />
                <text />
              </svg>
            </div>
            A new way to
            <div className="animated-text">
              <span className="pb-4 bg-clip-text bg-gradient-to-br from-pink-600 to-pink-100">
                collaborate.
              </span>
              <span className="pb-4 bg-clip-text bg-gradient-to-br from-purple-600 to-purple-100">
                coordinate.
              </span>
              <span className="pb-4 bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-100">
                synchronize.
              </span>
            </div>
          </h2>

          <p className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-10 pb-24 md:px-16 tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-base bg-clip-text text-gray-300">
            Unleash the power of collective intelligence with MindSync – the
            ultimate real-time collaboration tool for notes and ideas.
          </p>
          {/* <div className="my-button-wrapper">
            <Link className="my-button" href="#">
              Button
            </Link>
            <div className="my-button-border"></div>
          </div> */}
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

        {/* Features */}
        <section className="py-12 relative overflow-hidden z-10">
          {/* Gradient section at top */}
          <div>
            <span className="w-full absolute h-[1px] top-0 opacity-25 gradientSectionBorderDivider"></span>
            <span className="gradientSectionBorder gradientSectionBorderLeft opacity-[0.15]"></span>
            <span className="gradientSectionBorder gradientSectionBorderRight opacity-[0.15]"></span>
          </div>

          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 py-4">
            <h2 className="text-center tracking-tighter py-12 leading-tight lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Features that help you work smarter
            </h2>
            <p className="pb-12 text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-base bg-clip-text text-gray-300">
              MindSync is packed with powerful features designed to help you
              take better notes, collaborate more effectively, and stay
              organized and productive no matter where you are.
            </p>
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden bg-black no-underline border rounded-xl border-zinc-800">
                <dt>
                  <div
                    className="animated-icon after:bg-neutral-900 motion-reduce:animate-none 
                    after:p-px shadow-lg shadow-zinc-700 before:h-[200%] before:w-[200%] after:inset-0 
                    before:content-[''] after:content-[''] before:absolute after:absolute before:-z-10 
                    after:-z-10 rounded-xl overflow-hidden flex items-center justify-center h-12 w-12 
                    bg-neutral-900 text-white"
                  >
                    <UsersIcon className="h-6 w-6 drop-shadow-[0_0_0.2rem_#ffffffff]"></UsersIcon>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-300">
                    Real-Time Collaboration
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Work together in real-time with your team or classmates to
                  brainstorm ideas, take notes, and collaborate on projects.
                </dd>
              </div>

              <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden bg-black no-underline border rounded-xl border-zinc-800">
                <dt>
                  <div
                    className="animated-icon after:bg-neutral-900 motion-reduce:animate-none 
                    after:p-px shadow-lg shadow-zinc-700 before:h-[200%] before:w-[200%] after:inset-0 
                    before:content-[''] after:content-[''] before:absolute after:absolute before:-z-10 
                    after:-z-10 rounded-xl overflow-hidden flex items-center justify-center h-12 w-12 
                    bg-neutral-900 text-white"
                  >
                    <ArrowPathIcon className="h-6 w-6 drop-shadow-[0_0_0.2rem_#ffffffff]"></ArrowPathIcon>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-300">
                    Cross-Device Syncing
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Access your notes and ideas anytime, anywhere with
                  MindSync&apos;s cross-device syncing feature. Whether
                  you&apos;re on your laptop, phone, or tablet, you can always
                  stay connected to your work and collaborate with others in
                  real-time.
                </dd>
              </div>

              <div className="box-border relative flex flex-col gap-5 p-8 overflow-hidden bg-black no-underline border rounded-xl border-zinc-800">
                <dt>
                  <div
                    className="animated-icon after:bg-neutral-900 motion-reduce:animate-none 
                    after:p-px shadow-lg shadow-zinc-700 before:h-[200%] before:w-[200%] after:inset-0 
                    before:content-[''] after:content-[''] before:absolute after:absolute before:-z-10 
                    after:-z-10 rounded-xl overflow-hidden flex items-center justify-center h-12 w-12 
                    bg-neutral-900 text-white"
                  >
                    <MagnifyingGlassIcon className="h-6 w-6 drop-shadow-[0_0_0.2rem_#ffffffff]"></MagnifyingGlassIcon>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-300">
                    Advanced Search
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Find what you&apos;re looking for in seconds with
                  MindSync&apos;s advanced search feature. With the ability to
                  search for keywords and even specific phrases within notes,
                  you&apos;ll never have to waste time scrolling through pages
                  of content to find what you need.
                </dd>
              </div>

              {/* <div>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-neutral-900 text-white">
                    <ClockIcon className="h-6 w-6 drop-shadow-[0_0_0.2rem_#ffffffff]"></ClockIcon>
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-300">
                    Revision History
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-400">
                  Keep track of changes and revisions with MindSync&apos;s
                  revision history feature. With the ability to see who made
                  what changes and when, you can easily collaborate with others
                  and ensure that your notes and ideas are always up-to-date.
                  Plus, you can always revert to an earlier version if needed,
                  giving you more control and flexibility in your workflow.
                </dd>
              </div> */}
            </dl>
          </div>
        </section>

        {/* Gradient section below the features */}
        <section className="-translate-y-[75px] py-[55px] -scale-x-100 rotate-180 relative overflow-hidden">
          <div>
            <span className="w-full absolute h-[1px] top-0 opacity-25 gradientSectionBorderDivider"></span>
            <span className="gradientSectionBorder gradientSectionBorderLeft opacity-[0.15]"></span>
            <span className="gradientSectionBorder gradientSectionBorderRight opacity-[0.15]"></span>
          </div>
        </section>

        {/* Live demo */}
        <section>
          <EditorModal
            cardData={selectedCard}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <div className="flex justify-center items-center pb-12">
            <h2 className="text-center tracking-tighter leading-tight lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Live Demo
            </h2>
            <span className="ml-2 relative flex h-3 w-3 -translate-y-1/2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>
          <p className="pb-6 text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-base bg-clip-text text-gray-300">
            Don&apos;t take our word for it – try MindSync out yourself.
            <br />
            Simply open the demo in another tab, browser, or device, and start
            typing to see changes appear instantly. TODO put this text in a
            container, aligned with the text/cards above
          </p>
          <div className="flex justify-center">
            <div className="rounded-lg border-2 border-yellow-700/25 bg-yellow-800/25 px-4 py-2">
              <div className="flex items-center">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500/90 mr-1" />
                <span className="text-yellow-500/90">
                  The content below is user-generated.
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg border-2 border-yellow-700/25 bg-yellow-800/25 px-4 py-2">
              <div className="flex items-center">
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500/90 mr-1" />
                <span className="text-yellow-500/90">
                  TODO: the search bar goes here
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-24">
            <div className="masonry-grid w-full max-w-6xl">
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`djkfghjkdfghkjdf
dfgdfg
fghfh
gradientSectionBorderRightfgh
fghfhfgh
fghfhfghh
fghfhfgh
e`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`...`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`djkfghjkdfghkjdf
dfgdfg
fghfh
gradientSectionBorderRightfgh


dfgdfg
dfgdfg


re4


5
fghfhfgh
fghfhfghh
fghfhfgh
e`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`...`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`djkfghjkdfghkjdf
dfgdfg
fghfh
gradientSectionBorderRightfgh

4rg
fghfhfgh
fghfhfghh
fghfhfgh
e`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`...`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`djkfghjkdfghkjdf
dfgdfg
fghfh
gradientSectionBorderRightfgh
fghfhfgh
fghfhfghh

dfgdfgdfg



fadeOutTimeoutf

fadeOutTimeoutf
fadeOutTimeout

4

45


6gh
fghfhfgh
e`}
                />
              </div>
              <div className="masonry-grid-item">
                <Card
                  onCardClick={() => {
                    setSelectedCard("");
                    setIsModalOpen(true);
                  }}
                  text={`...`}
                />
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center items-center">
            <div className="flex flex-col rounded-lg border-2 border-red-700/25 bg-red-700/25 p-4 items-center">
              <div className="flex items-center">
                <h1 className="text-lg font-bold text-center mr-2">
                  Live Demo
                </h1>

                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>

              <div className="flex flex-col items-center mt-2">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
                Hello
              </div>
            </div>
          </div> */}
          {/* <div className="flex justify-center items-center">
            <div className="flex rounded-lg border-2 border-red-700/20 bg-red-700/20 p-4 items-center">
              <h1 className="text-lg font-bold text-center mr-2">Live Demo</h1>

              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>

              <div className="flex flex-col items-center mt-2">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </div> */}
          {/* <UsersIcon className="h-6 w-6 drop-shadow-[0_0_0.2rem_#ffffffff]"></UsersIcon> */}
        </section>
      </main>
    </>
  );
}
