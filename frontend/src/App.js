
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        

        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
