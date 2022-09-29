
const accountSid = ''; // Your Account SID from www.twilio.com/console
const authToken = ''; // Your Auth Token from www.twilio.com/console

function sendOtp(mobileNo,otp,orderID){
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({body: `Hi, OTP for order id ${orderID}  is ${otp}!`, from: '+18454796532', to: `+917851875570`})
    .then(message => console.log(message.sid));
}

module.exports.sendOtp = sendOtp;

