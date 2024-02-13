import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
return (
    <>
      <Head>
        <title>Jeonghyeon's Portfolio</title>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;