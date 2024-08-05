import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';


const App = () => {

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
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App