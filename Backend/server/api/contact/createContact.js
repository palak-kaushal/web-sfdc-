const Contact = require("./contactModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const sendMail = require("../../config/nodemailer")

require("dotenv").config()


const createContact = async(req, res) => {
    try {
        const { name, email, phone, project, subject, message } = req.body
            // const image = req.files.image[0].filename
            // const pancard = req.files.pancard[0].filename
            // const addharcard = req.files.addharcard[0].filename

        const validation = []

        if (!name || typeof name !== "string") {
            validation.push("name is required and type must be string ")
        }
        if (!email || typeof email !== "string") {
            validation.push("email is required and type must be string ")
        }

        if (!phone || typeof phone !== "string") {
            validation.push("phone is required and type must be string ")
        }

        if (!project || typeof project !== "string") {
            validation.push("project is required and type must be string ")
        }

        if (!subject || typeof subject !== "string") {
            validation.push("subject is required and type must be string ")
        }
        if (!message || typeof message !== "string") {
            validation.push("message is required and type must be string ")
        }


        if (validation.length > 0) {
            return res.json({
                status: 400,
                success: false,
                message: "validation error",
                error: validation
            })
        }


        const user = new Contact({
            name: name,
            email: email,
            phone: phone,
            project: project,
            subject: subject,
            message: message
        })

        await user.save()


        const adminMsg = ` New contact submission:

            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Project: ${project}
            Subject: ${subject}
            Message: ${message}`;

        await sendMail(process.env.EMAIL, `New Contact from ${name}`, adminMsg);

        res.json({
            status: 201,
            success: true,
            message: "new user is create successfully",
            data: user
        })
    } catch (err) {
        res.json({
            status: 500,
            success: false,
            message: "internal server error",
            error: err.message
        })

    }
}

module.exports = { createContact }