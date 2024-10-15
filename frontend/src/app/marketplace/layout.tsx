import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "TradeStack | MarketPlace",
  description: "TradeStack: Safe, Smart, Secure Transactions for E-Commerce and Beyond",
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
