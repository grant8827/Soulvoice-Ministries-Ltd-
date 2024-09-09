import './App.css';
import HeaderMain from './components/header/HeaderMain';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "../src/components/pages/About";
import Schedule from "./components/pages/Schedule";
import Contact from "./components/pages/Contact";
import Services from './components/pages/Services';

import Footer from './components/comps/Footer';
function App() {
  return (
    <div>
      <Router>
      <HeaderMain/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
       
      </Routes>
      <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
