import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";
import TransitionProvider from "../components/molecule/TransitionProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Growbytee Global Private Limited",

  description:
    "Growbytee Global Private Limited is a Tirunelveli-based digital marketing agency serving businesses worldwide with SEO, social media marketing, branding, web development, AI automation, and innovative growth solutions.",

  icons: {
    icon: { url: "/images/growbytee_fav_icon.png", sizes: "16x16", type: "image/png" },
  },

  // google search console verification
  verification: {
    google: "WAXEXNWoz0lv8QGbu0Oj13SncHaRKVRTQusX54_yfpc",
  },

  // canonical tag
  metadataBase: new URL("https://growbyteeglobal.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <TransitionProvider column={5}>
          <Navbar />
          <main className="flex-1">
            {children}
            <Toaster
              position="top-right"
              richColors
              toastOptions={{
                unstyled: true,
                classNames: {
                  toast:
                    "min-w-xs w-fit flex p-3 select-none gap-3 justify-start items-center rounded-lg shadow-lg bg-white text-slate-900 border border-slate-200",
                  title: "line-clamp-3 font-medium",
                },
              }}
            />
          </main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
