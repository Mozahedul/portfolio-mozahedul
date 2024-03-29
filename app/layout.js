"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { roboto } from "../utils/google-fonts/fonts";
import "react-toastify/dist/ReactToastify.css";
import Header from "./sections/header/page";
import FooterSection from "./sections/footer/page";
import Spin from "./components/animation/spinner/page";

export default function RootLayout({ children }) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    return setIsContentLoaded(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Portfolio - Mozahedul Islam</title>
      </head>
      <body
        className={`${roboto.className} relative max-w-[1400px] xl:mx-auto`}
      >
        {!isContentLoaded ? (
          <Spin />
        ) : (
          <>
            <Header />
            {children}
            <ToastContainer />
            <FooterSection />
          </>
        )}
      </body>
    </html>
  );
}
