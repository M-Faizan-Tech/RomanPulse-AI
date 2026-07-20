export default function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-32 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
    </>
  );
}