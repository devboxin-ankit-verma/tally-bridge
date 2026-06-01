import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tally On Phone | TallyBridge – Mobile Tally Accounting",
  description:
    "Tally on your phone. Access business data, track sales, send invoices, view reports, and manage payment reminders — with real-time sync, offline access, and bank-grade security.",
  keywords: ["Tally", "mobile accounting", "GST", "TallyBridge", "offline Tally"],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
  openGraph: {
    title: "Tally On Phone | TallyBridge",
    description: "Your Tally data, anywhere. Sync, bill, and report on the go.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} data-theme="royalPurple">
      <body className="min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
