"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { roboto } from "../utils/google-fonts/fonts";
import "react-toastify/dist/ReactToastify.css";
import Header from "./sections/header/page";
import FooterSection from "./sections/footer/page";
import Spin from "./components/animation/spinner/page";

// export const metadata = {
//   title: "Home Page",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    return setIsContentLoaded(true);
  }, [setIsContentLoaded]);

  return (
    <html lang="en">
      <head>
        <title>Portfolio - Mozahedul Islam</title>
      </head>
      <body
        className={`${roboto.className} relative mx-7 my-7 md:mx-9 lg:mx-11`}
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
