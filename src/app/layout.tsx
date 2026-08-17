import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Daniela Burgos Ortega | Golf",
  description:
    "Golf portfolio of Daniela Burgos Ortega — former NCAA Division I athlete and XUNTAS member pursuing a path toward the LPGA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}