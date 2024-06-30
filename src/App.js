// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import { MyNav } from './Component/Navbar/navbar';
import { Home } from './Component/Home/home';
import { About } from './Component/About/about';
import {Service} from './Component/Service/service'
import {Contact} from './Component/Contact/contact'
import {SignUp} from './Component/SignUp/signup'

function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/service' element={<Service/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/signup' element={<SignUp/>}/> 
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
