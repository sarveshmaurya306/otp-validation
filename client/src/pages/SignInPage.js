import React, { useState } from 'react'
import AKLogo from '../assets/AK_logo.svg'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

import otpApi from '../api/otpApi';

function SignInPage() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  function handleGetOTP(e) {
    
    e.preventDefault();
    otpApi.getOtp({mobileNumber: phone}).then(res => {
      if(res?.data?.status) {
        toast.success(res?.data?.message);
        navigate(`/otp-verify?mobile-number=${phone}`)
      } else {
        toast.error(res?.data?.message)
      }
    }).catch(err => {
      toast.error(err?.message)
    })
  }


  return (
    <>
      <div className='tw-flex tw-justify-center tw-my-24'>
        <img src={AKLogo} alt='ak logo' className='tw-scale-75' />
      </div>
      <div className='tw-mb-16'>
        <p className='tw-text-lg tw-font-medium'>Welcome Back</p>
        <p className='tw-text-[#666666] tw-text-sm mt-3'>Please sign in to your account</p>
      </div>

      <form onSubmit={handleGetOTP}>
        <div className=' tw-w-full tw-flex tw-justify-center'>
          <PhoneInput inputProps={{
            name: 'phone',
            required: true,
          }}
            containerClass='tw-w-fit'
            country={'in'}
            value={phone}
            specialLabel='Enter Contact Number'
            placeholder="phone number"
            onChange={phone => setPhone('+' + phone)}
            inputClass="PhoneInput"
            inputStyle={{
              width: "100%",
              padding: "0.75rem 3.3rem",
              borderRadius: "5px",
              border: "1px solid #FFD37D"
            }}
          />

        </div>
        <div className='tw-opacity-50 tw-text-xs tw-mt-5'>
          <p>
            We will send you a one time SMS message.
          </p>
          <p>
            Charges may apply.
          </p>
        </div>
        <div className='tw-my-24'>
          <button type='submit' className="hover:tw-text-black !tw-w-[70%] tw-btn tw-py-3 tw-rounded-full tw-bg-[#F7B348] tw-text-white tw-capitalize tw-text-sm tw-font-medium ">Sign In with OTP</button>
        </div>
      </form>
    </>
  )
}

export default SignInPage