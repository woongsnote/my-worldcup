import Head from "next/head";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      {title ? (
        <Head>
          <title>Woongsnote | {title}</title>
        </Head>
      ) : null}

      <main>{children}</main>
    </>
  );
};

export default Layout;
