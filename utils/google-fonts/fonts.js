import { Roboto, Inter } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});
