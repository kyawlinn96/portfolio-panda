import {Fira_Code} from "next/font/google";
import localFont from "next/font/local";

export const MonoSans = localFont({
    src : "../assets/fonts/Monosans.ttf",
    display: 'swap',
    variable: "--font-mono-sans"
})

export const FiraCode = Fira_Code({
    weight: ['400','500', '700'],
    display: "swap",
    subsets: ['latin'],
    variable: "--font-fira-code",
})