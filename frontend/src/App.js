import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Login/>} ></Route>
        <Route path='/signup' element={<Signup/>} ></Route>

        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
