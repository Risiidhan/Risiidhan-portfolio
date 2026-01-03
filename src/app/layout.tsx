import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://risiidhan.com"),
  authors: [{ name: "Risiidhan", url: "https://risiidhan.com/" }],
  title: "Risiidhan Punniyamoorthy - Portfolio",
  description:
    "A Software Engineer who focuses on clean, maintainable code at an architectural level, following solid design principles to build efficient, scalable, and stable systems.",

  openGraph: {
    title: "Risiidhan Punniyamoorthy",
    description:
      "A Software Engineer who focuses on clean, maintainable code at an architectural level, following solid design principles to build efficient, scalable, and stable systems.",
    url: "https://risiidhan.com/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://risiidhan.com/profile-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Risiidhan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risiidhan Punniyamoorthy",
    creator: "@risiidhan",
    description:
      "A Software Engineer who focuses on clean, maintainable code at an architectural level, following solid design principles to build efficient, scalable, and stable systems.",
    images: ["https://risiidhan.com/profile-landscape.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  keywords: [
    "Nextjs",
    "web developer",
    "software engineer",
    "portfolio",
    "risiidhan",
    "frontend",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
