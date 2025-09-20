import type { Metadata } from "next";
import { Lexend_Giga, Sawarabi_Gothic, Urbanist } from "next/font/google";
import "../styles/_reset.scss";
import "../styles/_variables.scss";
import "../styles/_custom.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Header from "./_components/layout/header/Header";
import Footer from "./_components/layout/footer/Footer";
import GlobalAnimationProvider from "@/providers/GlobalAnimationProvider";

const sawarabiGothic = Sawarabi_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sawarabi",
  display: "swap",
});

const lexendGiga = Lexend_Giga({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio by mayu sugita",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${sawarabiGothic.variable} ${lexendGiga.variable} ${urbanist.variable}`}>
        <GlobalAnimationProvider>
          <Header />
          {children}
          <Footer />
        </GlobalAnimationProvider>
      </body>
    </html>
  );
}
