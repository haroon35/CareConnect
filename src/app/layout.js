import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareConnect",
  description: "This is a platform that connect donars and orphanages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <body className={inter.className}>{children}</body>
      
    </html>
  );
}
