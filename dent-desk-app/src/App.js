
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import Navbar from './Component/Navbar';
import { Footer } from './Component/Footer';
import { HomeRouter } from './HomeRouter';
import Allroutes from './Allroutes/routes';
import AuthContextComponent from './Allroutes/context';
import PopupLoginForm from './Component/PopUpLogin';
function App() {
   return (<>
 <AuthContextComponent>
 <BrowserRouter>
 <Navbar/>
 
 <Routes>
  <Route path='/' element = {<HomeRouter/>}/>
  <Route path='/*' element = {<Allroutes/>}/>
  <Route path='/login' element= {<PopupLoginForm/>}/>
 </Routes>
 </BrowserRouter>
  <Footer/>

  </AuthContextComponent>
 </>
   )
}

export default App;
