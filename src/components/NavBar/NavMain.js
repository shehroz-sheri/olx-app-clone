import React from 'react'
import { NavMotor } from '../../pages/NavMotor/NavMotor'
import { NavProperty } from '../../pages/NavProperty/NavProperty'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Link } from 'react-router-dom';

export default function NavMain() {
  return (
    <div className='container py-3 px-4 d-flex'>
      <div className='px-3'>
        <img src="https://msk-olx.web.app/static/media/OLX-Logo.8ad8a26ba9ee8073c140.png" alt="" />
      </div>
      <div className='px-3'>
        <NavMotor />
      </div>
      <div className='px-3'>
        <NavProperty />
      </div>
    </div>
  )
}
