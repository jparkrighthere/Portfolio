import Head from 'next/head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { PropsWithChildren } from 'react';

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Head>
        <div>hi</div>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;