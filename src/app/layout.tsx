import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { url } from "inspector";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  authors: [{ name: "Risiidhan", url: "https://risiidhan.netlify.app/" }], 
  title: "Portfolio of Risiidhan Punniyamoorthy",
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
    url: "https://risiidhan.netlify.app/",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQG2Ag0pXiq8bw/profile-displayphoto-shrink_800_800/B56ZXCA5DIHQAc-/0/1742716770343?e=1748476800&v=beta&t=46djyk2paClwkeu8SBVWTenpfvmUHJDXo61H7_t9ZA4",
        width: 400,
        height: 400,
        alt: "Risiidhan"
      },
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQG2Ag0pXiq8bw/profile-displayphoto-shrink_800_800/B56ZXCA5DIHQAc-/0/1742716770343?e=1748476800&v=beta&t=46djyk2paClwkeu8SBVWTenpfvmUHJDXo61H7_t9ZA4",
        width: 1200,
        height: 630,
        alt: "Risiidhan"
      }
    ]
  },
  keywords: ["Nextjs", "web developer", "software engineer"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={""}
      >
        {children}
      </body>
    </html>
  );
}
