import { Roboto, Lora } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});

export const lora = Lora({
	subsets: ["latin"],
	display: "swap",
	weight: ["400", "500", "600", "700"],
});

export const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["100", "300", "400", "500", "700", "900"],
});
