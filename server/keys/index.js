const dotenv= require('dotenv');
dotenv.config();

module.exports= {
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
    TWILIO_VERIFIED_NUMBER: process.env.TWILIO_VERIFIED_NUMBER,
    PORT: process.env.PORT
}