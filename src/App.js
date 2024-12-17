import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import BackToTop from './components/common/BackToTop';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes></BrowserRouter>
  <BackToTop/>
    </div>
  );
}

export default App;
