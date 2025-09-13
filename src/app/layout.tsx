import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://risiidhan.com"),
  authors: [{ name: "Risiidhan", url: "https://risiidhan.com/" }],
  title: "Risiidhan Punniyamoorthy - Portfolio",
  description: `Hi, I'm a Software Engineer who have demonstrated a strong ability
                to adapt quickly and learn independently. My journey began with a
                role where I served to enhance website responsiveness 
                and now I play a full stack role in the development of comprehensive projects`,
  openGraph: {
    title: "Risiidhan Punniyamoorthy",
    description: `Hi, I'm a Software Engineer who have demonstrated a strong ability
                to adapt quickly and learn independently. My journey began with a
                role where I served to enhance website responsiveness 
                and now I play a full stack role in the development of comprehensive projects`,
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
    title: "Risiidhan Punniyamoorthy",
    description: `Hi, I'm a Software Engineer who have demonstrated a strong ability to adapt quickly and learn independently. My journey began with a role where I served to enhance website responsiveness and now I play a full stack role in the development of comprehensi  ve projects`,
    images: [
      {
        url: "https://risiidhan.com/profile-landscape.jpg",
        width: 1200,
        height: 630,
        alt: "Risiidhan",
      },
    ],
  },
  keywords: ["Nextjs", "web developer", "software engineer"],
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
      <body className={""}>{children}</body>
    </html>
  );
}
