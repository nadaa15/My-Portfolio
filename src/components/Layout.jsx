import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className='relative z-30'>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
