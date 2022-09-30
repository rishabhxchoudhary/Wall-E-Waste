// // const twilio = require('twilio');
const accountSid = 'AC67e8dbdc066b995ade1f77ad6549c485'; // Your Account SID from www.twilio.com/console
const authToken = '7ae138d7455e66961d013432d6c660f3'; // Your Auth Token from www.twilio.com/console

// const twilio = require('twilio');
// const client = new twilio(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hello your otp for order id 69696 is 69696!',
//     to: '+917851875570', // Text this number
//     from: '+18454796532', // From a valid Twilio number
//   })
//   .then((message) => console.log(message.sid));

function sendOtp(mobileNo,otp,orderID){
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({body: `Hi, OTP for order id ${orderID}  is ${otp}!`,messagingServiceSid: 'MG08abe9693a5b8cebe2a24f08c3381c5b', to: `+919769857233`})
    .then(message => console.log(message.sid)).done();
}

// sendOtp('+919769857233',"1234","5678")
module.exports.sendOtp = sendOtp;

// const client = require('twilio')(accountSid, authToken);
//     client.messages
//     .create({body: `Hi, OTP for order id is `, from: '+19377779515', to: `+919769857233`})
//     .then(message => console.log(message.sid));
