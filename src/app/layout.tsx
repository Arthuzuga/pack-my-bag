import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600"],
});

export const metadata = {
  title: "Pack My Bag",
  description: "Your friend to help organize what you need to get for travels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
