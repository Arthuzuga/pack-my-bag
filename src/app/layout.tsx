import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "./components";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "600"],
});

export const metadata = {
  title: "Arrume minha mala",
  description: "O amigo que te ajuda a organizar o que precisa para viajar",
  viewport: {
    width: "device-width",
    minimumScale: 1,
    maximumScale: 1,
    initialScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={notoSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
