// /* eslint-disable react-hooks/set-state-in-effect */
// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(useGSAP);

// const navigationLinks = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Services",
//     href: "/",
//   },
//   {
//     label: "Our Work",
//     href: "/",
//   },
//   {
//     label: "About",
//     href: "/",
//   },
//   {
//     label: "Contact",
//     href: "/",
//   },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navbarRef = useRef<HTMLElement>(null);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const overlayRef = useRef<HTMLButtonElement>(null);
//   const menuLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
//   const closeButtonRef = useRef<HTMLButtonElement>(null);

//   const timelineRef = useRef<gsap.core.Timeline | null>(null);

//   useGSAP(
//     () => {
//       if (!menuRef.current || !overlayRef.current) return;

//       gsap.set(menuRef.current, {
//         xPercent: -100,
//       });

//       gsap.set(overlayRef.current, {
//         autoAlpha: 0,
//         pointerEvents: "none",
//       });

//       gsap.set(menuLinkRefs.current, {
//         opacity: 0,
//         x: -50,
//       });

//       gsap.set(closeButtonRef.current, {
//         opacity: 0,
//         rotate: -90,
//       });

//       const timeline = gsap.timeline({
//         paused: true,
//         defaults: {
//           ease: "power3.inOut",
//         },
//       });

//       timeline
//         .to(overlayRef.current, {
//           autoAlpha: 1,
//           pointerEvents: "auto",
//           duration: 0.35,
//         })
//         .to(
//           menuRef.current,
//           {
//             xPercent: 0,
//             duration: 0.75,
//           },
//           0,
//         )
//         .to(
//           closeButtonRef.current,
//           {
//             opacity: 1,
//             rotate: 0,
//             duration: 0.4,
//           },
//           0.3,
//         )
//         .to(
//           menuLinkRefs.current,
//           {
//             opacity: 1,
//             x: 0,
//             duration: 0.65,
//             stagger: 0.08,
//           },
//           0.3,
//         );

//       timelineRef.current = timeline;
//     },
//     {
//       scope: navbarRef,
//     },
//   );

//   useEffect(() => {
//     const timeline = timelineRef.current;

//     if (!timeline) return;

//     if (isMenuOpen) {
//       timeline.timeScale(1).play();
//       document.body.style.overflow = "hidden";
//     } else {
//       timeline.timeScale(1.35).reverse();
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isMenuOpen]);

//   useEffect(() => {
//     setIsMenuOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setIsMenuOpen(false);
//       }
//     };

//     window.addEventListener("keydown", handleEscape);

//     return () => {
//       window.removeEventListener("keydown", handleEscape);
//     };
//   }, []);

//   const openMenu = () => {
//     setIsMenuOpen(true);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header ref={navbarRef} className="relative z-50 w-full bg-[#f7f7f7]">
//       <nav className="flex h-25 items-center justify-between px-6 sm:h-15 lg:h-20 sm:px-10 lg:px-15">
//         {/* Hamburger button */}
//         <button
//           type="button"
//           onClick={openMenu}
//           aria-label="Open navigation menu"
//           aria-expanded={isMenuOpen}
//           aria-controls="main-navigation-menu"
//           className="group flex h-12 w-14 cursor-pointer flex-col items-start justify-center gap-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52cb7c]"
//         >
//           <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1" />

//           <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-2" />

//           <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1" />
//         </button>

//         {/* Main logo */}
//         <Link
//           href="/"
//           aria-label="Growbytee home"
//           className="relative block h-14 w-47 sm:h-12 sm:w-40"
//         >
//           <Image
//             src="/images/logo.svg"
//             alt="Growbytee"
//             fill
//             priority
//             sizes="170px"
//             className="object-contain"
//           />
//         </Link>
//       </nav>

//       {/* Background overlay */}
//       <button
//         ref={overlayRef}
//         type="button"
//         aria-label="Close navigation menu"
//         onClick={closeMenu}
//         tabIndex={isMenuOpen ? 0 : -1}
//         className="fixed inset-0 z-40 cursor-default bg-black/45 backdrop-blur-[2px]"
//       />

//       {/* Sliding menu */}
//       <div
//         ref={menuRef}
//         id="main-navigation-menu"
//         aria-hidden={!isMenuOpen}
//         // className="fixed top-0 left-0 z-50 flex h-dvh w-full flex-col overflow-hidden bg-[#1c1c1c] px-6 py-8 sm:px-10 sm:py-10 lg:w-1/2 lg:px-14 xl:px-18"
//         className="fixed top-0 left-0 z-50 flex h-dvh w-full flex-col overflow-hidden bg-[#1c1c1c] px-6 py-8 sm:px-10 sm:py-10 lg:w-full lg:px-14 xl:px-18"
//       >
//         {/* Menu top */}
//         <div className="flex items-start justify-between">
//           {/* Decorative arrow — replace with your own SVG */}
//           <div className="relative h-8 w-20 sm:h-10 sm:w-20">
//             <Image
//               src="/images/menu-arrow.svg"
//               alt=""
//               fill
//               sizes="80px"
//               className="cursor-pointer object-contain object-left"
//               onClick={closeMenu}
//             />
//           </div>

//           <div className="relative h-9 w-16 sm:h-11 sm:w-20">
//             <Image
//               src="/images/logo-2.png"
//               alt="Growbytee"
//               fill
//               sizes="80px"
//               className="object-contain object-right"
//             />
//           </div>
//         </div>

//         {/* Navigation links */}
//         <div className="flex flex-1 items-center">
//           <ul className="flex w-full flex-col">
//             {navigationLinks.map((link, index) => {
//               const isActive =
//                 link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

//               return (
//                 <li key={link.href} className="overflow-hidden">
//                   <Link
//                     ref={(element) => {
//                       menuLinkRefs.current[index] = element;
//                     }}
//                     href={link.href}
//                     onClick={closeMenu}
//                     tabIndex={isMenuOpen ? 0 : -1}
//                     className={`group flex items-center justify-between py-3 text-[clamp(2rem,4vw,5rem)] leading-none font-normal tracking-[-0.055em] transition-colors duration-300 sm:py-4 ${
//                       isActive ? "text-[#52cb7c]" : "text-[#f4f4f4] hover:text-[#52cb7c]"
//                     }`}
//                   >
//                     <span>{link.label}</span>

//                     {/* <span className="translate-x-4 text-[0.35em] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
//                       ↗
//                     </span> */}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>

//         {/* Menu footer */}
//         <div className="flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
//           {/* <div className="relative h-14 w-16">
//             <Image
//               src="/images/growbytee-icon.svg"
//               alt="Growbytee"
//               fill
//               sizes="64px"
//               className="object-contain object-left"
//             />
//           </div> */}

//           <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
//             <a
//               href="https://www.instagram.com/growbytee_global"
//               target="_blank"
//               rel="noreferrer"
//               className="transition-colors hover:text-white"
//             >
//               Instagram
//             </a>

//             <a
//               href="https://www.linkedin.com/in/growbytee-global-bb36b5422/"
//               target="_blank"
//               rel="noreferrer"
//               className="transition-colors hover:text-white"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="https://www.youtube.com/@growbyteeglobal"
//               target="_blank"
//               rel="noreferrer"
//               className="transition-colors hover:text-white"
//             >
//               YouTube
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/",
  },
  {
    label: "Our Work",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const navbarRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLButtonElement>(null);
  const menuLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const lastScrollYRef = useRef(0);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  /*
   * Initialize the closed menu position.
   */
  useGSAP(
    () => {
      if (!menuRef.current || !overlayRef.current) return;

      gsap.set(menuRef.current, {
        xPercent: -100,
      });

      gsap.set(overlayRef.current, {
        autoAlpha: 0,
        pointerEvents: "none",
      });

      gsap.set(menuLinkRefs.current, {
        opacity: 0,
        x: -50,
      });
    },
    {
      scope: navbarRef,
    },
  );

  /*
   * Open and close animation.
   */
  useGSAP(
    () => {
      const menu = menuRef.current;
      const overlay = overlayRef.current;

      if (!menu || !overlay) return;

      menuTimelineRef.current?.kill();

      if (isMenuOpen) {
        gsap.set(overlay, {
          pointerEvents: "auto",
        });

        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.inOut",
          },
        });

        timeline
          .to(overlay, {
            autoAlpha: 1,
            duration: 0.35,
          })
          .to(
            menu,
            {
              xPercent: 0,
              duration: 0.75,
            },
            0,
          )
          .to(
            menuLinkRefs.current,
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
            },
            0.25,
          );

        menuTimelineRef.current = timeline;
      } else {
        const timeline = gsap.timeline({
          defaults: {
            ease: "power3.inOut",
          },
          onComplete: () => {
            gsap.set(overlay, {
              pointerEvents: "none",
            });
          },
        });

        timeline
          .to(menuLinkRefs.current, {
            opacity: 0,
            x: -30,
            duration: 0.25,
            stagger: {
              each: 0.03,
              from: "end",
            },
          })
          .to(
            menu,
            {
              xPercent: -100,
              duration: 0.65,
            },
            0.05,
          )
          .to(
            overlay,
            {
              autoAlpha: 0,
              duration: 0.3,
            },
            0.2,
          );

        menuTimelineRef.current = timeline;
      }

      return () => {
        menuTimelineRef.current?.kill();
      };
    },
    {
      scope: navbarRef,
      dependencies: [isMenuOpen],
    },
  );

  /*
   * Hide navbar when scrolling down.
   * Show navbar when scrolling up.
   */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollYRef.current;
      const scrollDifference = currentScrollY - previousScrollY;

      if (isMenuOpen) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (currentScrollY <= 100) {
        setIsNavbarVisible(true);
        lastScrollYRef.current = currentScrollY;
        return;
      }

      if (Math.abs(scrollDifference) < 4) {
        return;
      }

      if (scrollDifference > 0) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  /*
   * Lock scrolling while menu is open.
   */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /*
   * Close menu when route changes.
   */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /*
   * Close menu using Escape key.
   */
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const openMenu = () => {
    setIsNavbarVisible(true);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header ref={navbarRef} className="fixed top-0 left-0 z-50 w-full">
      {/* Navbar */}
      <nav
        className={`relative z-70 flex h-25 items-center justify-between bg-bg/70 px-6 backdrop-blur-lg transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] sm:h-15 sm:px-10 lg:h-20 lg:px-15 ${
          isNavbarVisible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Hamburger button */}
        <button
          type="button"
          onClick={openMenu}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation-menu"
          className="group flex h-12 w-14 cursor-pointer flex-col items-start justify-center gap-1 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#52cb7c]"
        >
          <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1" />

          <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-2" />

          <span className="h-1 w-8 rounded-full bg-black transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Main logo */}
        <Link
          href="/"
          aria-label="Growbytee home"
          className="relative block h-14 w-47 sm:h-12 sm:w-40"
        >
          <Image
            src="/images/logo.svg"
            alt="Growbytee"
            fill
            priority
            sizes="170px"
            className="object-contain"
          />
        </Link>
      </nav>

      {/* Background overlay */}
      <button
        ref={overlayRef}
        type="button"
        onClick={closeMenu}
        aria-label="Close navigation menu"
        tabIndex={isMenuOpen ? 0 : -1}
        className="fixed inset-0 z-60 cursor-default bg-black/45 backdrop-blur-[2px]"
      />

      {/* Sliding menu */}
      <div
        ref={menuRef}
        id="main-navigation-menu"
        aria-hidden={!isMenuOpen}
        className="fixed top-0 left-0 z-80 flex h-dvh w-full flex-col overflow-hidden bg-[#1c1c1c] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 xl:px-18"
      >
        {/* Menu top */}
        <div className="flex items-start justify-between">
          {/* Close arrow */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="relative h-8 w-20 cursor-pointer sm:h-10 sm:w-20"
          >
            <Image
              src="/images/menu-arrow.svg"
              alt=""
              fill
              sizes="80px"
              className="object-contain object-left"
            />
          </button>

          {/* Opened menu logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Growbytee home"
            className="relative h-9 w-16 sm:h-11 sm:w-20"
          >
            <Image
              src="/images/logo-2.png"
              alt="Growbytee"
              fill
              sizes="80px"
              className="object-contain object-right"
            />
          </Link>
        </div>

        {/* Navigation links */}
        <div className="flex flex-1 items-center">
          <ul className="flex w-full flex-col">
            {navigationLinks.map((link, index) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

              return (
                <li key={link.href} className="overflow-hidden">
                  <Link
                    ref={(element) => {
                      menuLinkRefs.current[index] = element;
                    }}
                    href={link.href}
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                    className={`group flex items-center justify-between py-3 text-[clamp(2rem,4vw,5rem)] leading-none font-normal tracking-[-0.055em] transition-colors duration-300 sm:py-4 ${
                      isActive ? "text-[#52cb7c]" : "text-[#f4f4f4] hover:text-[#52cb7c]"
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Menu footer */}
        <div className="flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
            <a
              href="https://www.instagram.com/growbytee_global"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/growbytee-global-bb36b5422/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://www.youtube.com/@growbyteeglobal"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
