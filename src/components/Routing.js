import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Mainhome from "./Mainhome";
import Userhome from './User/Userhome';
import Login from './Login';
import Viewprofile from './User/Viewprofile';
import Editprofile from './User/Editprofile';
import Complaint from './User/Complaint';
import Changepassword from './User/Changepassword';
import Adminhome from './Admin/Adminhome';
import AdminChangepassword from './Admin/Changepassword';
import Viewcomplaint from './Admin/Viewcomplaint';

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Mainhome/>}></Route>
            <Route path='/userhome' element={<Userhome/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/viewprofile' element={<Viewprofile/>}></Route>
            <Route path='/viewprofile' element={<Viewprofile/>}></Route>
            <Route path='/editprofile' element={<Editprofile/>}></Route>
            <Route path='/complaint' element={<Complaint/>}></Route>
            <Route path='/changepassword' element={<Changepassword/>}></Route>
            <Route path='/adminhome' element={<Adminhome/>}></Route>
            <Route path='/adminhome' element={<Adminhome/>}></Route>
            <Route path='/adminchangepass' element={<AdminChangepassword/>}></Route>
            <Route path='/viewcomplaint' element={<Viewcomplaint/>}></Route>
        </Routes>

    </div>
  )
}

export default Routing