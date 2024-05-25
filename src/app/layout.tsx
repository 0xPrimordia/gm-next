import type { Metadata } from "next";
import React from "react";
import { createRoot } from "react-dom/client";
import page from "./page";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Toaster } from "./components/ui/Toaster";
import { getGasless } from "./utils/getGasless";

import { Londrina_Solid } from "next/font/google";
import "./globals.css";
import"./css/main.css";
const londrina = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "GM",
  description: "GM - v1",
};
const activeChainId = 8453; // Base chain ID
const clientIdConst = '7f02867cd22acd60803070fbbcac9bc7';

// The {children} prop: https://welearncode.com/use-children-react/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={londrina.className + " page1 gradient-background"}>
      <React.StrictMode>
    <ThirdwebProvider activeChain={activeChainId} clientId={clientIdConst}>
      <Toaster />
    </ThirdwebProvider>
  </React.StrictMode>,
      </body>
    </html>
  );
}
