import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import TopProducts from './components/TopProducts'
import Banner from './components/Banner'
import Subscribe from './components/Subscribe'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Popup from './components/Popup'
import { useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


const App = () => {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();

  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App