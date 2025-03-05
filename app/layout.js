import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const meta = {
  title: "Grace Pavilion Church",
  description:
    "GRACE PAVILION CHAPEL (GPC) IS A CHARISMATIC MINISTRY BORN OUT OF THE WOMB OF THE HOLY SPIRIT.",

  url: "https://gracepavilionchapel.com",
  ogDescription:
    "At Grace Pavilion Chapel, we are not merely a congregation; we are a dynamic and thriving community of followers of Jesus Christ.",
  image: "/img/logo.jpeg",
  siteName: "Grace Pavilion Church",
  locale: "en_US",
  ogimage: "https://www.gracepavilionchapel.com/img/logo.jpeg",
  twitter: {
    title: "Grace Pavilion Chapel",
    site: "@GracePavilionChapel",
    cardType: "summary_large_image",
  },
};

export const metadata = {
  title: "Grace Pavilion Chapel",
  description:
    "GRACE PAVILION CHAPEL (GPC) IS A CHARISMATIC MINISTRY BORN OUT OF THE WOMB OF THE HOLY SPIRIT.",
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
    siteName: "Grace Pavilion Church",
    locale: "en_US",
  },
  twitter: {
    title: "Grace Pavilion Church",
    description: meta.description,
    images: meta.ogimage,
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={
          inter.className +
          " bg-youth-img bg-no-repeat background bg-fixed   md:bg-cover md:bg-bottom "
        }
      >
        {children}
      </body>
    </html>
  );
}
