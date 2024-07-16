import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: " Grace Pavilion Church",
  description:
    "We at grace pavilion chapel, we are more than just a congregation; we are a vibrant community of followers of jesus christ.",

  url: "https://gracepavilionchapel.com",
  ogDescription:
    "We at grace pavilion chapel, we are more than just a congregation; we are a vibrant community of followers of jesus christ.",
  image: "/img/logo.jpeg",
  siteName: " Grace Pavilion Church",
  locale: "en_US",
  ogimage: "/img/logo.jpeg",
  twitter: {
    title: "Grace Pavilion Chapel",
    site: "@GracePavilionChapel",
    cardType: "summary_large_image",
  },
};

export const metadata = {
  title: "Grace Pavilion Chapel",
  description:
    "We at grace pavilion chapel, we are more than just a congregation; we are a vibrant community of followers of jesus christ.",
  metadataBase: new URL("https:/gracepavilionchapel.com/"),
  alternates: {
    canonical: `https://gracepavilionchapel.com/`,
  },
  openGraph: {
    title: meta.title,
    description: meta.ogDescription,
    url: meta.url,
    type: "website",
    images: meta.ogimage,
    siteName: " Grace Pavilion Church",
    locale: "en_US",
  },
  twitter: {
    title: " Grace Pavilion Church",
    description: meta.description,
    images: meta.ogimage,
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className + " dark:bg-neutral-800"}>
        {children}
      </body>
    </html>
  );
}
