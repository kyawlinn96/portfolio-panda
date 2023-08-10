import "./globals.css";
import type { Metadata } from "next";
import { FiraCode, MonoSans } from "@/styled/fonts";
import NavigationBar from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "Hello",
  description: "my beloved portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${MonoSans.variable} ${FiraCode.variable}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
