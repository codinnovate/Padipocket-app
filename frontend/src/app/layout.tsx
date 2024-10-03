'use client'

import "./globals.css";
import Script from "next/script";
import { useEffect, useState } from "react";
import { lookInSession } from "./lib/session";
import { UserContext } from "@/context";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [userAuth, setUserAuth] = useState({});
  useEffect(() => {
    const  userInSession = lookInSession("user");
    userInSession ?  setUserAuth(JSON.parse(userInSession)) : setUserAuth({access_token:null})
},[])
  return (
    <html lang="en">
      <body
        className={``}
        
      >
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
      </UserContext.Provider>
        <Script 
        src="https://js.paystack.co/v2/inline.js"
        strategy="beforeInteractive"
        />

      </body>
    </html>
  );
}
