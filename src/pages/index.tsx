import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <Navbar/>
      <Footer/>
    </div>
  );
};

export default Home;
