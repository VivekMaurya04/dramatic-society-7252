
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes'

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <AllRoutes/> */}
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
