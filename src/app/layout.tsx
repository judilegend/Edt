import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Registering Syncfusion license key

import { enableRipple } from "@syncfusion/ej2-base";
//Enable ripple effect
enableRipple(true);
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="e-bigger font-bold text-xl h-screen w-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
