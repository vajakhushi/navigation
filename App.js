import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Work from './Work';
import { Route,Routes,Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Result from './Result';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/>
      <About/>
      <Contact/>
      <Work/> */}
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
        <Route path="/ourwork" exact element={<Work/>}/>
        <Route path="/:id" exact element={<Result/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
