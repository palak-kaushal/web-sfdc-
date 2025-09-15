const Contact = require("./contactModel");
const sendMail = require("../../config/nodemailer");
require("dotenv").config();

const createContact = async(req, res) => {
    try {
        const { name, email, phone, project, subject, message } = req.body;


        const validation = [];
        if (!name || typeof name !== "string") validation.push("Name is required");
        if (!email || typeof email !== "string") validation.push("Email is required");
        if (!phone || typeof phone !== "string") validation.push("Phone is required");
        if (!project || typeof project !== "string") validation.push("Project is required");
        if (!subject || typeof subject !== "string") validation.push("Subject is required");
        if (!message || typeof message !== "string") validation.push("Message is required");

        if (validation.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: validation,
            });
        }


        const user = new Contact({ name, email, phone, project, subject, message });
        await user.save();


        const adminMsg = `📩 New Contact Submission:

        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project: ${project}
        Subject: ${subject}
        Message: ${message}
        `;

        await sendMail(
            process.env.EMAIL,
            `New Contact from ${name}`,
            adminMsg
        );


        const userMsg = `Hello ${name},

        ✅ Thank you for contacting Websfdc Technology!  
        We have received your message and will get back to you soon.  

        Your submitted details:
        - Project: ${project}
        - Subject: ${subject}

        Best regards,  
        Websfdc Technology Team
        `;

        await sendMail(
            email,
            "Thank you for contacting Websfdc Technology",
            userMsg
        );

        return res.status(201).json({
            success: true,
            message: "Contact created. Emails sent to admin & user.",
            data: user,
        });
    } catch (err) {
        console.error(" Error in createContact:", err.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err.message,
        });
    }
};

module.exports = { createContact };