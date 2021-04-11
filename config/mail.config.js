const nodemailer = require("nodemailer")

const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport)
//verify() to verify communication
transporter.verify((error, success)=> {
    if(error)
        console.log(error)
    else
        console.log("ready to send mails")
})


module.exports = transporter