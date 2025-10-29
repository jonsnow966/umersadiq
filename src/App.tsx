import './App.css'
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './componenets/Loader/Loader';
import Header from './componenets/Header/Header';
import Footer from './componenets/Footer/Footer';
import Home from './componenets/Home/Home';
import About from './componenets/About/About';
import Work from './componenets/Work/Work';
import Contact from './componenets/Contact/Contact';
import SidebarLeft from './componenets/Sidebar_L/SidebarLeft';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Match 3s animation duration

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen
      relative
      flex flex-col items-center
      overflow-hidden hide-scrollbar
      bg-background">

        <header className="w-full md:w-[80%] h-[71px] md:h-[61px] 
        flex justify-center items-center
        fixed top-0 z-50
        transition-all duration-1000 ease-in-out">
          <Header />
        </header> 

        {/* Left SideBar  */}
        <div className="w-0 md:w-[20%] h-full 
        flex flex-col justify-start items-start
        absolute top-0 left-0
        transition-all duration-900
        bg-background">

          <SidebarLeft />
          <img rel='icon' src='/dots.png' className="w-0 md:w-30 h-fit
          absolute top-[40%] -left-14
          transition-all duration-800 ease-in-out
          animate-[pulse_2s_linear_infinite]
          "></img>

          <div className="w-0 md:w-40 h-40
          absolute top-[70%] -left-25 lg:-right-20
          transition-all duration-800 ease-in-out
          animate-[bounce_10s_linear_infinite]
          border-2 border-gray"></div>
        </div>

        {/* Right Sidebar */}
        <div className="w-0 md:w-[20%] h-full
        flex flex-col justify-center items-center
        absolute top-0 right-0
        transition-all duration-900
        ">
          <div className="w-0 md:w-40 h-40
          absolute top-[20%] -right-25 lg:-right-20
          transition-all duration-800 ease-in-out
          animate-[bounce_10s_linear_infinite]
          border-2 border-gray"></div>

          <img rel='icon' src='/dots.png' className="w-0 md:w-30 h-fit
          absolute top-[60%] -right-14
          transition-all duration-800 ease-in-out
          animate-[pulse_2s_linear_infinite]
          "></img>
        </div>

        <main className=" w-full md:w-[80%] h-fit
        relative z-20
        flex flex-col justify-center items-center
        transition-all duration-1000 ease-in-out
        mt-[61px] md:mt-[61px]
        ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="w-full h-fit
        flex justify-center items-center
        relative z-20 
        transition-all duration-1000 ease-in-out
        py-5 px-6 md:px-0
        border-t border-gray bg-background">
          <Footer />
        </footer>
      </div>
      
    </BrowserRouter>
  )
}

export default App
