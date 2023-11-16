
import './App.css';
import Navbar from './Component/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { TopService } from './Component/TopService';
import { Footer } from './Component/Footer';
function App() {
 const clintid='389604519005-i3hrjk2mjdvva2aqa57ph0rcb8gd6hr6.apps.googleusercontent.com'
   return (
 
   <>
   < Navbar/>
  <Home/>
  <TopService/>
  <Footer/>
   </>
  

   )
}

export default App;
