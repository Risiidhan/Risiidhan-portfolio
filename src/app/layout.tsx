import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
        url: "https://media.licdn.com/dms/image/v2/D5603AQG2Ag0pXiq8bw/profile-displayphoto-shrink_800_800/B56ZXCA5DIHQAc-/0/1742716770343?e=1748476800&v=beta&t=46djyk2paClwkeu8SBVWTenpfvmUHJDXo61H7_t9ZA4",
        width: 400,
        height: 400,
        alt: "Risiidhan"
      },
    ]
  },
  twitter: {
    title: "Risiidhan Punniyamoorthy",
    description: `Hi, I'm a Software Engineer who have demonstrated a strong ability to adapt quickly and learn independently. My journey began with a role where I served to enhance website responsiveness and now I play a full stack role in the development of comprehensi  ve projects`,
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D5603AQG2Ag0pXiq8bw/profile-displayphoto-shrink_800_800/B56ZXCA5DIHQAc-/0/1742716770343?e=1748476800&v=beta&t=46djyk2paClwkeu8SBVWTenpfvmUHJDXo61H7_t9ZA4",
        width: 400,
        height: 400,
        alt: "Risiidhan"
      },
    ]
  },
  keywords: ["Nextjs", "web developer", "software engineer"],
icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
}
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
