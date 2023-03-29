import Head from "next/head";
import localFont from "next/font/local";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { navLinks } from "@/testData/testData.data";

import { footerData } from "@/testData/testData.data";

const regularFont = localFont({
  preload: true,
  src: [
    {
      path: "../assets/fonts/Gilroy-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/Gilroy-Semibold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/Gilroy-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Gilroy-Thin.woff2",
      weight: "300",
    },
  ],
});

type LayoutProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Calday"}</title>
        <meta name="description" content={description || "Calday project"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header className={regularFont.className} navLinks={navLinks} />

      <main className={regularFont.className}>{children}</main>

      <Footer className={regularFont.className} {...footerData} />
    </>
  );
};
export default Layout;
