import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Padipocket",
  description: "PadiPocket: Safe, Smart, Secure Transactions for E-Commerce and Beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
        
      >
        {children}
        <Script 
        src="https://js.paystack.co/v2/inline.js"
        strategy="beforeInteractive"
        />

      </body>
    </html>
  );
}
