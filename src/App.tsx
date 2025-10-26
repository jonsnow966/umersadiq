import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './componenets/HomePage/HomePage';
import AboutPage from './componenets/AboutPage/AboutPage';
import ContactPage from './componenets/ContactPage/ContactPage';
import WorkPage from './componenets/WorkPage/WorkPage';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/" element={<AboutPage/>} />
        <Route path="/" element={<WorkPage />} />
        <Route path="/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
