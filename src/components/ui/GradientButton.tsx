import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { usePageTransition } from "../molecule/TransitionProvider";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "background";
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export default function GradientButton({
  variant = "outline",
  children,
  href,
  target,
  rel,
  type = "button",
  className = "",
  ...buttonProps
}: GradientButtonProps) {
  const { navigateTo } = usePageTransition();

  const baseStyles = `relative inline-flex min-w-30 cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#5851db] ${className}`;

  const outlineStyles = `gradient-button-outline ${baseStyles} text-gray-900 `;

  const backgroundStyles = `gradient-button-background ${baseStyles} bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] text-white hover:-translate-y-0.5 `;

  const styles = variant === "outline" ? outlineStyles : backgroundStyles;

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href) || target === "_blank";

    // External links
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
          className={styles}
        >
          <span className="relative z-10">{children}</span>
        </a>
      );
    }

    // internal links
    return (
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault();
          navigateTo(href);
        }}
        className={styles}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={styles} {...buttonProps}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// eg
{
  /* 
  
<GradientButton variant="background" href="/contact" className="">
  Book a Strategy Call
</GradientButton> 

*/
}
