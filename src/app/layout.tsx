import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Padipocket",
  description: "Your Middle Man When Buying, Selling online",
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
      </body>
    </html>
  );
}
