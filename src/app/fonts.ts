import { Inter } from "next/font/google";
import { Pirata_One } from "next/font/google";

export const bodyFont = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-body",
});

export const heroFont = Pirata_One({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-hero",
});
