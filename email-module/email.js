// After you have downloaded the Nodemailer module, you can include the module in any application:
// var nodemailer = require('nodemailer');
// Send an Email
// Now you are ready to send emails from your server.
// Use the username and password from your selected email provider to send an email. This tutorial will show you how to use your Gmail account to send an email:

// reference: https://www.w3schools.com/nodejs/nodejs_email.asp 

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});