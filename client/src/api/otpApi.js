import instance from './config/axios';

const otpApi= {
    getOtp: (data)=> instance.post('/get-otp', data),
    verifyOtp: (data)=> instance.post('/verify-otp', data)
}

export default otpApi;