"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.clearScrollMemory();
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [pathname]);

  return null;
}
