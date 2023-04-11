import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const navItems = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
];

const Home = () => {
  return (
    <div>
      <Navbar items={navItems}/>
      <Footer/>
    </div>
  );
};

export default Home;
