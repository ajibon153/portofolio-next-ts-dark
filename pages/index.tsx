import type { NextPage } from 'next';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Header from '../components/Head/Header';
import Navigation from '../components/navigation/Navigation';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonial from '../components/Testimonial/Testimonial';

const Home: NextPage = () => {
  return (
    <div className={'container'}>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
