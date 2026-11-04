const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/submit-checkout', async (req, res) => {
    const { customer_name, customer_email, customer_address } = req.body;

    // Configure transporter to look like your screenshot's localhost server
    let transporter = nodemailer.createTransport({
        host: 'localhost',
        port: 25, // default local SMTP port
        secure: false, // TLS if available
        tls: { rejectUnauthorized: false }
    });

    let mailOptions = {
        from: 'webserver@localhost',
        replyTo: customer_email,
        to: 'nxloaded@gmail.com',
        subject: `New Checkout Form Submission - ${customer_name}`,
        text: `New Checkout Submission Received\n====================================\n\nBilling Details:\n------------------------------------\nName: ${customer_name}\nEmail: ${customer_email}\nAddress: ${customer_address}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.send('Order submitted successfully!');
    } catch (error) {
        res.status(500).send('Error sending email: ' + error.message);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
