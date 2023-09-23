import React from 'react'
import IlustrationIcon from '../assets/Artboard 1.svg';
import { toast } from 'react-toastify';

function SuccessPage() {
  function handleLastCompletion(e) {
    e.preventDefault();
    toast.success("Thanks for visiting, Made by Sarvesh Kumar")
  }
  return (
    <>
      <div className='tw-flex tw-justify-center tw-my-0 sm:tw-my-6'>
        <img src={IlustrationIcon} alt='ak logo' className='tw-scale-90' />
      </div>
      <div className='tw-mb-6'>
        <p className='tw-text-lg tw-font-semibold tw-text-[#333333]'>Welcome to AdmitKard</p>
      </div>

      <div>
        <p className='tw-text-[#999999] tw-text-sm'>In order to provide you with</p>
        <p className='tw-text-[#999999] tw-text-sm'>a custom experience,</p>
        <p className='tw-text-[#666666] tw-text-sm tw-font-medium'>we need to ask you a few questions.</p>
      </div>

      <form onClick={handleLastCompletion}>
        <div className='tw-w-full tw-flex tw-justify-center tw-my-6 sm:tw-my-12'></div>

        <div className='tw-mb-16'>
          <div className='tw-text-sm tw-mb-5'>
          </div>
          <button type='submit' style={{transition: 'all 500ms ease'}} className="hover:tw-shadow-md hover:tw-bg-black !tw-w-[70%] tw-btn tw-py-3 tw-rounded-full tw-bg-[#F7B348] tw-text-white tw-capitalize tw-text-sm tw-font-medium ">
            Get Started
          </button>
          <p className='tw-text-[#999999] tw-text-xs mt-1'>
            *This will only take 5 min.
          </p>
        </div>
      </form>
    </>
  )
}

export default SuccessPage