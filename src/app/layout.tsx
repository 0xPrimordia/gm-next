import type { Metadata } from "next";
import { Londrina_Solid } from "next/font/google";
import "./globals.css";
import"./css/main.css";
import { ThirdwebProvider } from "thirdweb/react";
const londrina = Londrina_Solid({
  weight: ['100', '300', '400', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "GM",
  description: "GM - v1",
};
const activeChainId = 8453; // Base chain ID


// The {children} prop: https://welearncode.com/use-children-react/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={londrina.className + " page1 gradient-background"}>
        <ThirdwebProvider desiredChainId={activeChainId}>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
