import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import MyProfile from './Components/MyProfile/MyProfile';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='myprofile' element={<MyProfile/>}/>
       <Route path='login' element={<Login/>}/>
       <Route path='signup' element={<Register/>}/>
     </Routes>
    </div>
  );
}

export default App;
