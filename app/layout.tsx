import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";
import TradingViewWidget from "@/components/tradingView/TradingViewWidget";
// import ScrollTop from "@/components/scroll-to-top/Scroll"
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700", "800", "900"], // Menambahkan weight untuk font
});

export const metadata: Metadata = {
  title: "Coinzone",
  description: "Coinzone Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col justify-center items-center overflow-hidden bg-white w-full  ">
          <TradingViewWidget />
          
          <Navbar />
          {/* Hero Section */}
          <div className="w-[77%]">{children}</div>
          <Footer />
          {/* <ScrollTop/> */}
        </div>
      </body>
    </html>
  );
}
