export default function HeroHeading({ children }: { children: any }) {
  return (
    <h1 className="tracking-tighter leading-tight lg:text-8xl md:text-7xl sm:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
      {children}
    </h1>
  );
}
