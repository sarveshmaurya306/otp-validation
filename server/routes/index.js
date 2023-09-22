const router= require('express').Router();
const smsController= require('../controllers/sendOtpController');
/*
* prefixed with /api
*/

router.post('/get-otp', smsController.getOTP);
router.post('/verify-otp', smsController.verifyOTP);

module.exports= router;