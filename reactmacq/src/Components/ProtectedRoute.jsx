import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = () => {

    useEffect(()=>{
        const ms=localStorage.getItem('values')
    })

const mss=localStorage.getItem('values')
console.log(mss)
    return mss? <Outlet/>:<Login/>

  return (
    <div></div>
  )
}

export default ProtectedRoute