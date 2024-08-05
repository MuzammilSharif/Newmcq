import React from 'react'
import {Routes,Route} from 'react-router-dom'
import McqPage2 from './McqPage2'
import Login from './Login'
import Preview from './Preview'
import ProtectedRoute from './ProtectedRoute'

const McqRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
            <Route path="/page2" element={<McqPage2/>}/>
            <Route path="/Preview" element={<Preview/>}/>
            </Route>
        </Routes>
    </div>
  )
}

export default McqRouter