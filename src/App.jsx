
import './App.css'
import React from 'react'
import { Link, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Customer from "./components/Customer"
import Home from "./components/Home"
import Login from "./components/Login"
import Booked from './components/Booked'
import Log from './components/Log'
import Admin from './components/Admin'
import Create from './components/Create'
import Read  from './components/Read'
import Update from './components/Update'

function App() {
 

  return (
    <div >

     
     <Routes>
         <Route exact path='/' element={<Home/>}/>
        <Route path="/customer" element={<Customer/>} />
        <Route path="/login" element={<Login />} />
        <Route path='/booked' element={<Booked/> } />
        <Route path='/log' element={<Log/> } />
        <Route path='/admin' element={<Admin/> } />
        <Route path='/create' element={<Create/> } />
        <Route path='/read' element={<Read/> } />
        <Route path='/update' element={<Update/> } />
     </Routes>
    </div>
  )
}

export default App
