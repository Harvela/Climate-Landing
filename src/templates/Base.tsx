import { Navbar } from '@/navigation/Navbar';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { AboutUs } from './About';
import Counter from './Counter';
import { Footer } from './Footer';
import { Galery } from './Galery';
import { Hero } from './Hero';

const Base = () => {
  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {/* <div className="relative h-[100vh] w-full">
        <img
          src="/assets/images/home/background.jpg"
          alt="Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-[50%] bg-[#063421]/60">
          <Navbar />
          <Hero />
        </div>
        <div className="absolute right-0 top-0 h-full w-[50%] bg-primary-300">
          <Hero />
        </div>
      </div> */}
      <Navbar />
      <Hero />
      <AboutUs />
      <Counter />
      <Galery />
      {/* <Projects />
      <Team /> */}
      <Footer />
    </div>
  );
};

export { Base };
