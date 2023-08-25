
import './App.css';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { TopService } from './Component/TopService';
import { Footer } from './Component/Footer';
function App() {
   return (<>
 < Navbar/>
<Home/>
<TopService/>
<Footer/>
 </>
   )
}

export default App;
