"use strict";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   host: "smtp.forwardemail.net",
   port: 465,
   secure: true,
   auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "noreply@talkay.org",
      pass: "339a1269d1f777e9bef752bc",
   },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
   // send mail with defined transport object
   const info = await transporter.sendMail({
      from: '"TALKAY" <noreply@talkay.org>', // sender address
      to: "ireddprince@gmail.com", // list of receivers
      subject: "Registration Confirmation Email", // Subject line
      text:
         `Hello,
      Your email was added to Talkay as Admin, please enter the OTP code to complete the verification process.
      
      Thank,
      
      Talkay Team
      `, // plain text body
      // html: "<b>Your email was added to Talkay as Admin, please enter the OTP code to complete the verification process.</b>", // html body
   });

   console.log("Message sent: %s", info.messageId);
   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

   //
   // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
   //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
   //       <https://github.com/forwardemail/preview-email>
   //
}

main().catch(console.error);
