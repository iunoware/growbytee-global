import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
  // verification: {
  //   google: "T6V1zKAoyq6kHlV5IyaMwVWp2IM9OdT08hXKEcZ6fro",
  // },

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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
