import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <header className="p-4 flex items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/about">About</Link>
      </header>

      <div className="p-4">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
