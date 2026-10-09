import { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <>
      <span
        className={`block bg-linear-to-r from-gradient-from via-gradient-via to-gradient-to bg-clip-text text-transparent ${className}`}
      >
        {children}
      </span>
    </>
  );
}
