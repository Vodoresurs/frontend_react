import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Единая региональная метрологическая служба",
  description: "Поверка водосчётчиков",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
