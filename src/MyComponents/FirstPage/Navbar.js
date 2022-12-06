import React from 'react';
import './Navbar.css';
import { Button } from './Button';
import logo from '../Images/Netflix-Brand-Logo.png';
import "./Button.css";

export const Navbar = () => {
  return (
    <>
    <div className='navbar-header'>
      <img className='navbar-logo' src={logo} alt="logo" />
      <div className='navbar-button'>
        <Button className='btn btn-outline-light main-button' text='SignIn' text2='Hindi' text1='English'/>
      </div>
    </div>
    </>
  )
}
