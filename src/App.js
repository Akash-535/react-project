import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Second from './views/Second';
import BackToTop from './components/common/BackToTop';
import Preloader from './components/common/Preloader';

function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='second' element={<Second/>}/>\
  </Routes></BrowserRouter>
  <BackToTop/>
  {/* <Preloader/> */}
    </div>
  );
}

export default App;
