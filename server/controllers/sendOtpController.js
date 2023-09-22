const smsOtpService = require('express').Router();
const { sendSMS } = require('../services/smsService');

const mobOtpDB = {};

const getOTP= async (req, res, next) => {
  console.log(mobOtpDB, 'db');

  try {
    const { mobileNumber } = req.body;
    if (mobOtpDB[mobileNumber]) {
      return res.send({
        message: "Kindly wait for 3 minutes before trying again.",
        status: false
      })
    }

    //generate 4 digit otp
    const min_number = 1000;
    const max_number = 9999;
    const otp = Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;
    
    await sendSMS(mobileNumber, `Your OTP for sign up is ${otp}`);

    mobOtpDB[mobileNumber] = otp;
    setTimeout(() => {
      delete mobOtpDB[mobileNumber];
    }, 180 * 1000); //3 minute  
    
    return res.send({
      message: "OTP sent, only valid for 3 minutes",
      status: true
    })
  } catch (err) {
    res.send({
      message: err.message,
      status: false
    });
  }
}

const verifyOTP = async (req, res, next) => {
  console.log(mobOtpDB, 'db');

  try {
    const { otp, mobileNumber } = req.body;
    if (mobOtpDB[mobileNumber] === parseInt(otp)) {
      delete mobOtpDB[mobileNumber];
      return res.send({
        message: "OTP validation successfull",
        status: true
      })
    } else {
      throw Error("Your OTP has been Expired");
    }
  } catch (err) {
    res.send({
      message: err.message,
      status: false
    });
  }
}

module.exports = { 
    getOTP,
    verifyOTP 
};