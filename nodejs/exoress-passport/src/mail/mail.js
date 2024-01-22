const mailer = require("nodemailer");
const welcome = require(".welcome_template");
const goodbye = require(".goodbye_template");

const getEmailData = (to, name, templete) => {
  let data = null;

  switch (templete) {
    case "welcome":
      data = {
        from: "보내는 사람이름 <cheiru94@gmail.com>",
        to,
        subject: `Hello ${name}`,
        html: welcome(),
      };
      break;
    case "goodbye":
      data = {
        from: "보내는 사람이름 <cheiru94@gmail.com>",
        to,
        subject: `Goodbye ${name}`,
        html: goodbye(),
      };
      break;

    default:
      break;
  }

  return data;
};

const sendMail = (to, name, type) => {
  // 메일 전공 객체 생성
  const transporter = mailer.createTransporter({
    service: "Gmail",
    auth: {
      user: "cheiru94@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mail = getEmailData(to, name, type);

  // transporter객체는 sendEmail메서드를 가지고 있음
  transporter.sendEmail(mail, (err, response) => {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent successfully");
    }

    transporter.close();
  });
};

module.exports = sendMail;
