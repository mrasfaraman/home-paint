import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  try {
    const { fullname, email, subject, message } = await req.json();
    console.log({
      fullname,
      email,
    });
    const { SMTP_PASS, SMTP_EMAIL } = process.env;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASS,
      },
    });
    const mailOptions = {
      from: SMTP_EMAIL, // Your website's email address
      to: SMTP_EMAIL, // The email address provided by the person submitting the form
      subject: `New Contact Form Submission - ${subject}`,
      text: `
    Full Name: ${fullname}
    Email: ${email}
    Message: ${message}
  `,
    };

    try {
      const results = await transporter.verify();
      console.log(results);
    } catch (error) {
      console.log(error);
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response("Email is Send");
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error");
  }
}
