import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Galileo Capital",
  description: "Navigate the volatile world of assets management with our secure and compliant platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Galileo Capital" />
        
        <meta property="og:title" content="Galileo Capital - Investment and Financial Advisory" />
        <meta property="og:description" content="Maximize your investments and secure your financial future with personalized professional advisory from Galileo Capital." />
        <meta property="og:image" content="/src/assets/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://galileocapital.io" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://galileocapital.io/" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Galileo Capital",
            "url": "https://galileocapital.io/",
            "logo": "https://galileocapital.io/logo.svg",
            "sameAs": [
              "https://www.instagram.com/galileo.capital/"
            ]
          }`
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
