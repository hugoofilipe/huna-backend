const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;
app.use('/api/v1', route);

app.get('/api/ping', (req, res) => {
  res.send('Pong !')
});

app.get('/api/text-mail', function (req, res) {
  console.log(`called by GET`);
  res.send('Hello test-mail!')
})
app.listen( port, () => {
    console.log(`Server listening on the foo ${port}`);
});

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  port: 465,               // true for 465, false for other ports
  host: "mail.huna.pt",
     auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PWD,
       },
  secure: true,
});

app.post('/api/text-mail', (req, res) => {
  const {to, subject, name, tel, text } = req.body;
  const mailData = {
    from: '"HUNA website" <geral@huna.pt>',
    to: to,
    subject: subject,
    text: text,
    name: name,
    tel: tel,
    html: `<b>Nome: ${name} tel: ${tel} Mensagem: ${text}</b>`
  };

  transporter.sendMail(mailData, (error, info) => {
      if (error) {
          return console.log(error);
      }
      // res.status(200).send({ message: "Mail send", message_id: info.messageId });
      res.status(200).send({ message: "Mail send"});
  });
});

// app.post('/api/text-mail', (req, res) => {
//   console.log(`called by post`);
//   res.status(200).send({ message: "Mail send (test)" });
// });