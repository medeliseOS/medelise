const nodemailer = require('nodemailer');
const pool = require("../db/pool");

const sendMail = async (templateName, mailVariable, email) => {
    try {

        const query = `
      SELECT
        subject,
        html_body,
        text_body
      FROM templates
      WHERE template_event = $1
        AND is_deleted = FALSE
        AND active = TRUE
      LIMIT 1
    `;


        const { rows } = await pool.query(query, [templateName]);

        if (!rows.length) {
            throw new Error('Mail template not found');
        }

        let subject = rows[0].subject;
        let html = rows[0].html_body;
        let text = rows[0].text_body;

        for (const key in mailVariable) {
            if (Object.prototype.hasOwnProperty.call(mailVariable, key)) {
                const value = mailVariable[key];
                if (typeof value === 'string') {
                    subject = subject.split(key).join(value);
                    html = html.split(key).join(value);
                    text = text.split(key).join(value);
                }
            }
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.PASSWORD,
            },
            pool: true,
            maxConnections: 5,
            maxMessages: 100,
        });

        const mailOptions = {
            from: '"No Reply" <wd47.stpl@gmail.com>',
            to: email,
            subject,
            text,
            html,
        };

        await transporter.sendMail(mailOptions);

        return {
            type: 'success',
            message: 'Mail successfully sent',
        };
    } catch (error) {
        console.error('SendMail Error:', error);
        throw new Error(error.message || 'Failed to send mail');
    }
};

/* =========================================================
   Exports
========================================================= */
module.exports = {
    sendMail,
};