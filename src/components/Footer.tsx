import Link from "next/link";
import Image from "next/image";
import GradientButton from "./GradientButton";

const footerLinks = [
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

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/growbytee_global",
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@growbyteeglobal",
    icon: YouTubeIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/growbytee/",
    icon: FacebookIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/growbytee-global-bb36b5422/",
    icon: LinkedInIcon,
  },
  {
    label: "X",
    href: "https://x.com/GrowbyteeGlobal",
    icon: XIcon,
  },
];

// const marqueeItems = Array.from({ length: 7 }, (_, index) => ({
//   id: index,
//   text: "Services",
// }));
const marqueeItems = [
  { id: 1, text: "Digital Marketing" },
  { id: 2, text: "Social Media Marketing" },
  { id: 3, text: "Content Marketing" },
  { id: 4, text: "Search Engine Optimization (SEO)" },
  { id: 5, text: "Generative Engine Optimization (GEO)" },
  { id: 6, text: "Brand & Creative Marketing" },
  { id: 7, text: "Influencer Marketing" },
  { id: 8, text: "Podcast" },
];

function MarqueeGroup() {
  return (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {marqueeItems.map((item) => (
        <div
          key={item.id}
          className="flex shrink-0 items-center gap-8 pr-8 sm:gap-10 sm:pr-10 lg:gap-12 lg:pr-12"
        >
          {/* <span className="h-4 w-4 rounded-full bg-[#171717] sm:h-5 sm:w-5" /> */}
          <div className="h-4 w-4 relative">
            <Image alt="Growbytee" src="/images/black-dot.svg" fill />
          </div>

          <span className="whitespace-nowrap text-lg font-medium text-[#171717] sm:text-xl">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Marquee */}
      <div className="overflow-hidden border-y border-black/10 bg-white py-4">
        <div className="footer-marquee flex w-max">
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>

      {/* Main footer */}
      <div className="relative overflow-hidden bg-[#171717] px-6 pt-14 text-white sm:px-10 lg:px-12 lg:pt-14">
        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-block text-base text-white/90 transition-colors duration-300 hover:text-[#4dcc7d]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer logo */}
          <div className="flex items-start justify-start md:justify-center">
            <Link
              href="/"
              aria-label="Growbytee home"
              className="group inline-flex items-center h-10 w-13 relative"
            >
              <Image
                alt="Growbytee Global Private Limited"
                src="/images/logo-2.png"
                fill
              />
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start md:items-end">
            <GradientButton variant="background">Book a Strategy Call</GradientButton>

            <address className="mt-4 max-w-56 text-left text-xs leading-relaxed not-italic text-white/80 md:text-right">
              No.248A, first floor, AV Complex, Thiruchendur Main Road,
              <br />
              Murugan kurichi, Tirunelveli,
              <br />
              Palayamkottai, Tamil Nadu 627002
            </address>

            <div className="mt-5 pb-10 md:pb-1 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#171717] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4dcc7d] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Large footer logo */}
        <div className="md:flex hidden relative z-0 mt-20 w-full justify-center overflow-hidden sm:mt-24 lg:mt-28">
          <div className="relative aspect-1600/220 w-full max-w-[1800px]">
            <Image
              src="/images/growbytee.png"
              alt="Growbytee Global Private Limited"
              fill
              sizes="100vw"
              className="object-contain object-bottom"
              priority={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.85.5-5.8.5-5.8s0-3.95-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  );
}

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12a12 12 0 1 0-13.88 11.86v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.66 4.53-4.66 1.31 0 2.69.23 2.69.23v2.96h-1.52c-1.49 0-1.96.93-1.96 1.88V12h3.33l-.53 3.47h-2.8v8.39A12 12 0 0 0 24 12Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47ZM22.23 0H1.77A1.77 1.77 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46A1.77 1.77 0 0 0 24 22.23V1.77A1.77 1.77 0 0 0 22.23 0Z" />
    </svg>
  );
}

function XIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.25-8.29L2.96 2H9.36l4.42 5.84L18.9 2Zm-1.1 17.85h1.72L8.43 4.04H6.58L17.8 19.85Z" />
    </svg>
  );
}
