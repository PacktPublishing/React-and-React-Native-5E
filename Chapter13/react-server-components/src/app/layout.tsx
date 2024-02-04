import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Server Components",
  description: "Posts and about page using React Server Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={inter.className}>
          <header className="p-4 flex items-center gap-4">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/about">About</Link>
          </header>

          <div className="p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
