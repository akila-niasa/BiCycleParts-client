import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import { Toaster } from 'react-hot-toast';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/Dashboard/MyOrder';
import AddReview from './Components/Dashboard/AddReview';
import MyProfile from './Components/Dashboard/MyProfile';
import Blogs from './Components/Blogs/Blogs';
import Payment from './Components/Dashboard/Payment';
import NotFound from './Shared/NotFound/NotFound';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import ManageProduct from './Components/Dashboard/ManageProduct';
import ManageAllOrder from './Components/Dashboard/ManageAllOrder';
import AddProduct from './Components/Dashboard/AddProduct';
import RequireAdmin from './Components/Login/RequireAdmin'

function App() {
  return (
    <div>
     <Navbar/>
     <div><Toaster/></div>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='blogs' element={<Blogs/>}/>
       <Route path='purchase/:id' element={<RequireAuth>
         <Purchase/>
       </RequireAuth>}/>
       <Route path='dashboard' element={<RequireAuth>
         <Dashboard/>
       </RequireAuth>}>
         <Route index element={<MyOrder/>}/>
         <Route path='addreview' element={<AddReview/>}/>
         <Route path='myprofile' element={<MyProfile/>}/>
         <Route path="payment/:id" element={<Payment/>}></Route>
         <Route path='makeadmin' element={<RequireAdmin>
          <MakeAdmin/>
         </RequireAdmin>}/>
         <Route path='manageproduct' element={<RequireAdmin>
          <ManageProduct/>
         </RequireAdmin>}/>
         <Route path='allorder' element={<RequireAdmin>
          <ManageAllOrder/>
         </RequireAdmin>}/>
         <Route path='addproduct' element={<RequireAdmin>
          <AddProduct/>
         </RequireAdmin>}/>
       </Route>

       <Route path='login' element={<Login/>}/>
       <Route path='signup' element={<Register/>}/>
       <Route path='*' element={<NotFound/>}/>

     </Routes>
    </div>
  );
}

export default App;
