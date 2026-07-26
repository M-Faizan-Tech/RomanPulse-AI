import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <main
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-6
        sm:px-8
        lg:px-12
        ${className}
      `}
    >
      {children}
    </main>
  );
}