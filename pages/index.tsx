import type { NextPage } from 'next';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Header from '../components/Head/Header';
import Navigation from '../components/navigation/Navigation';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
