import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Risiidhan Punniyamoorthy",
  description: `As a Software Engineer I have demonstrated a strong ability
                to adapt quickly and learn independently, ensuring timely project completion
                and maintaining a steadfast commitment to excellence. My journey began with a
                role where I served to enhance website responsiveness and cross platform development
                and now I play a full stack role in the development of comprehensive projects. 
                <br />Here's my journey as a Software Engineer for the past years`,
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
