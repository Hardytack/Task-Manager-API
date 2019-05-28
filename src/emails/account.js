const sgMail = require('@sendgrid/mail');


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thehardytack@gmail.com',
        subject: 'Welcome to Task-Manager!',
        text: `Welcome to the app, ${name}, let me know if you have any issues!`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'thehardytack@gmail.com',
        subject: `Goodbye ${name}, We will miss you!`,
        text: "You're account has been successfully closed. Please let us know if there is anything we can do to improve the app by replying to this email. Thank you for giving us a try!",
        html: `<h1>Goodbye ${name}</h1><p>Your account has been successfully closed. Please let us know if there is anything we can do to improve the app by replying to this email. Thank you for giving us a try!</p>`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}


