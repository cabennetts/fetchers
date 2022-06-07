import React from 'react'
import './fetchclub.css'
import {useState} from 'react'
import {Link, useMatch, useResolvedPath, Router, Routes } from 'react-router-dom'
import Login from '../../components/fetchclub/Login'
import Signup from '../../components/fetchclub/Signup'

const Fetchclub = () => {
  return (
    <>
      <h1>Fetch Club</h1>
      <div className="container fetchclub__container">
        
          {/* <Login /> */}
          <Signup />
      </div>
    </>


    
  )
}

export default Fetchclub