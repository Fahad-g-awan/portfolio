// // import nodemailer from "nodemailer";
// import { Mailer } from "nodemailer-react";

// const sendMessage = (sender, subject, content) => {
//   const transport = {
//     service: "gmail",
//     auth: {
//       user: process.env.GOOGLE_USER,
//       pass: process.env.GOOGLE_PASSWORD,
//     },
//   };

//   const defaults = {
//     from: sender,
//   };

//   const WelcomeEmail = ({ firstName }) => ({
//     subject: subject,
//     body: content,
//   });

//   const mailer = Mailer({ transport, defaults }, { WelcomeEmail });

//   mailer.send("WelcomeEmail", { firstName: sender }, { to: process.env.GOOGLE_USER });
// };

// export { sendMessage };
