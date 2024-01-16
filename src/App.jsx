import { Routes, Route } from 'react-router-dom'
import { About } from './papka/About';
import Home from "./papka/Home";
import { Str} from './Str';
import './App.css';

function App() {
 
  return (
    <>
    <Str/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
      
     </>
  );
}

export default App;