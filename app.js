var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "mail.huna.pt",
  port: 465,
  auth: {
    user: "geral@huna.pt",
    pass: "Huan5999."
  },
  secureConnection:false,
  debug: false, // show debug output
  logger: false // log information in console
});

var mailOptions = {
  from: '"HUNA website" <geral@huna.pt>', 
  to: 'geral@huna.pt',
  subject: 'HUNA website Contact form',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />'
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
