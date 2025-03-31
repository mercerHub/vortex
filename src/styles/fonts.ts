import { Inter, Poppins, Roboto, Montserrat, Merriweather, Playfair_Display, Caveat, Pacifico } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const poppins = Poppins({ subsets: ["latin"],weight: ["300", "400", "700", "900"], variable: "--font-poppins" });
export const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
export const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
export const merriweather = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-merriweather" });
export const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "700", "900"], variable: "--font-playfair" });
export const caveat = Caveat({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-caveat" });
export const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"], variable: "--font-pacifico" });
