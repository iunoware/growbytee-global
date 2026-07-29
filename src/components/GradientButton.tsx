// eg
{
  /* 
  
<GradientButton variant="background" href="/contact" className="">
  Book a Strategy Call
</GradientButton> 

*/
}

import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "background";
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function GradientButton({
  variant = "outline",
  children,
  href,
  className = "",
  type = "button",
  ...buttonProps
}: GradientButtonProps) {
  const baseStyles = `
    relative inline-flex min-w-30 cursor-pointer
    items-center justify-center rounded-full
    px-6 py-3 text-sm font-semibold
    transition-all duration-300
    focus-visible:outline-2
    focus-visible:outline-offset-3
    focus-visible:outline-[#5851db]
    ${className}
  `;

  const outlineStyles = `
    gradient-button-outline
    ${baseStyles}
    text-gray-900
  `;

  const backgroundStyles = `
    gradient-button-background
    ${baseStyles}
    bg-linear-to-r
    from-[#5851db]
    via-[#FD1D1D]
    to-[#FCAF45]
    text-white
    hover:-translate-y-0.5
  `;

  const styles = variant === "outline" ? outlineStyles : backgroundStyles;

  if (href) {
    return (
      <Link href={href} className={styles}>
        <span
          // className={`relative z-10 ${variant === "outline" ? "bg-white" : "bg-transparent"}`}
          className="relative z-10"
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...buttonProps}>
      <span
        // className={`relative z-10 ${variant === "outline" ? "bg-white" : "bg-transparent"} `}
        className="relative z-10"
      >
        {children}
      </span>
    </button>
  );
}
