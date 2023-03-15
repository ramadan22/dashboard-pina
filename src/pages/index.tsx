import Head from 'next/head';

import Template from '@/layouts';
import Stock from '@/features/stock';

const Home = () => (
  <Template>
    <Head>
      <title>Dashboard - Stock</title>
    </Head>
    <Stock />
  </Template>
);

export default Home;
