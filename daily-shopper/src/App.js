
import './App.css';
import { Footer } from './Components/Footer';
import Navbar from './Components/Navbar';
// import AllRoutes from './Components/AllRoutes'
import Home from './Pages/Home';
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <AllRoutes/> */}
     <Home/>
     <Footer/>
    </div>
  );
}

export default App;
