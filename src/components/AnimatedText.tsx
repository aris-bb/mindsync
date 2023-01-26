export default function AnimatedText({
  children,
  className,
}: {
  children: any;
  className: string;
}) {
  return (
    <span
      className={`tracking-tighter font-bold bg-clip-text text-transparent bg-gradient-to-br ${className}`}
    >
      {children}
    </span>
  );
}
