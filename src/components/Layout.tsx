import Head from "next/head";

type LayoutProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export default function Layout({ title, description, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "Calday"}</title>
        <meta name="description" content={description || "Calday project"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>{children}</>
    </>
  );
}
