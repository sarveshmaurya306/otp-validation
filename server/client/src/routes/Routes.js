import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


import SignInPage from '../pages/SignInPage'
import OtpPage from '../pages/OtpPage';
import SuccessPage from '../pages/SuccessPage'

function RouteProvider() {
  return (
    <div className='tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center tw-bg-gray-100'>
      <div className='tw-w-[85%] sm:tw-w-[350px] sm:tw-min-h-[90%] px-3 tw-bg-white tw-text-center tw-flex tw-flex-col tw-rounded-xl'>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact Component={SignInPage} />
            <Route path='/otp-verify' Component={OtpPage} />
            <Route path='/welcome' Component={SuccessPage} />
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
      </div>
    </div>
  )
}


export default RouteProvider