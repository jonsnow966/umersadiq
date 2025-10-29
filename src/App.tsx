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

        {/* Left Sidebar */}
        <div className="fixed top-0 left-0 w-0 md:w-[20%] h-screen flex flex-col justify-start items-start pointer-events-none">
          <div className="h-full pl-5 pb-[200px] md:pb-[250px] flex flex-col justify-start items-start">
            <SidebarLeft />
          </div>

          <img 
            rel='icon' 
            src='/dots.png' 
            className="w-0 md:w-30 h-fit absolute top-[80%] -left-14 transition-all duration-800 ease-in-out animate-[pulse_2s_linear_infinite]"
          />

          {/* <div className="w-0 md:w-40 h-40 absolute top-[80%] -left-25 lg:-left-20 transition-all duration-800 ease-in-out animate-[bounce_10s_linear_infinite] border-2 border-gray rounded-full"></div> */}
        </div>

        {/* Right Sidebar */}
        <div className="fixed top-0 right-0 w-0 md:w-[20%] h-screen flex flex-col justify-center items-center pointer-events-none">
          <div className="h-full pb-[200px] md:pb-[250px] flex flex-col justify-center items-center">
            <div className="w-0 md:w-40 h-40 absolute top-[53%] -right-25 lg:-right-20 transition-all duration-800 ease-in-out animate-[bounce_10s_linear_infinite] border-2 border-gray rounded-full"></div>

            {/* <img 
              rel='icon' 
              src='/dots.png' 
              className="w-0 md:w-30 h-fit absolute top-[60%] -right-14 transition-all duration-800 ease-in-out animate-[pulse_2s_linear_infinite]"
            /> */}
          </div>
        </div>

        <main className=" w-full md:w-[80%] h-fit
        relative z-20
        flex flex-col justify-center items-center
        transition-all duration-1000 ease-in-out
        mt-[61px] pb-32 md:pb-40
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
