import {Toaster} from 'react-hot-toast'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "./Provider";
import Navbar from "@/components/Appbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Blog",
  description: "Blog web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.className
        )}
      ><ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      
        <Provider>
        <Navbar />
        {children}
        </Provider>
    </ThemeProvider>
    <Toaster position='top-right'/>
      </body>
    </html>
  );
}
