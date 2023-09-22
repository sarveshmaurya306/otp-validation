import React, { useLayoutEffect, useState } from 'react';
import {useSearchParams, Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import handIcon from '../assets/undraw_confirmed_81ex.svg';
import OtpInput from 'react-otp-input';
import otpApi from '../api/otpApi';

function OtpPage() {
  const [otp, setOtp] = useState('');
  const navigate= useNavigate();

  const [searchParams] = useSearchParams();
  const [mobileNumber, setMobileNumber]= useState('');
  
  useLayoutEffect(()=>{
    setMobileNumber("+"+searchParams.get('mobile-number').trim());
  }, [])

  function handleVerifyOtp(e) {
    e.preventDefault();
    otpApi.verifyOtp({ otp: otp, mobileNumber: mobileNumber }).then(res => {
      if(res?.data?.status) {
        toast.success(res?.data?.message);
        navigate('/welcome');
      } else {
        toast.error(res?.data?.message)
      }
    }).catch(err => {
      toast.error(err?.message)
    })
  }

  function handleGetOTP(e) {
    e.preventDefault();

    console.log(mobileNumber);

    otpApi.getOtp({mobileNumber: mobileNumber}).then(res => {
      if(res?.data?.status) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message)
      }
    }).catch(err => {
      toast.error(err?.message)
    })
  }

  return (
    <>
      <div className='tw-flex tw-justify-center tw-my-0 sm:tw-my-16'>
        <img src={handIcon} alt='ak logo' className='tw-scale-90' />
      </div>
      <div className='tw-mb-6'>
        <p className='tw-text-base tw-font-medium tw-text-[#333333]'>Please verify Mobile number</p>
      </div>

      <div>
        <p className='tw-text-sm tw-text-[#666666]'>
          An OTP is sent to {mobileNumber}
        </p>
        <Link to="/">
          <p className='tw-text-sm tw-mt-1 tw-underline tw-text-[#F7B348]'>
            Change Phone Number
          </p>
        </Link>
      </div>

      <form onSubmit={handleVerifyOtp} className=''>
        <div className='tw-w-full tw-flex tw-justify-center tw-my-12'>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input required id="otp_id" {...props} />}
            inputStyle= {{
              width: "42px",
              height: "42px",
              borderRadius: 4,
              outline: "none",
              border:'1px solid rgba(0, 0, 0, 0.12)',
              filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12))',
              fontWeight: 'bold'
            }}
            containerStyle="tw-w-full tw-mt-3 tw-flex tw-justify-evenly tw-mx-auto tw-p-6"
            inputType='number'
          />
        </div>

        <div className='tw-mb-16'>
          <div className='tw-text-sm tw-mb-5'>
            <span className='tw-text-[#999999]'>
              Didn’t receive the code?
            </span>
            <button onClick={handleGetOTP} className='tw-text-[#F7B348] tw-ml-2'>
              Resend
            </button>
          </div>
          <button type='submit' className="hover:tw-text-black !tw-w-[70%] tw-btn tw-py-3 tw-rounded-full tw-bg-[#F7B348] tw-text-white tw-capitalize tw-text-sm tw-font-medium ">
            Verify
          </button>
        </div>
      </form>
    </>
  )
}

export default OtpPage