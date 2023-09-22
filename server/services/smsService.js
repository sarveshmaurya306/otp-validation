const twilio = require('twilio');

const {TWILIO_ACCOUNT_SID, TWILIO_VERIFIED_NUMBER, TWILIO_AUTH_TOKEN}= require('../keys')

const accountSid = TWILIO_ACCOUNT_SID;
const authToken = TWILIO_AUTH_TOKEN;
const twilioVerifiedNumber = TWILIO_VERIFIED_NUMBER;

const client= twilio(accountSid, authToken);

function sendSMS(to, body) {
  return client.messages
    .create({
      from: twilioVerifiedNumber,
      body,
      to
    })
}

module.exports = {
  sendSMS
}