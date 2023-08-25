// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const content = {
      to: "iona@exploreeducationandtraining.com.au", // Where you want to receive the emails
      from: email, // From the person who filled out the form
      subject: `New Message from ${name}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send("Message sent successfully.");
    } catch (error) {
      console.error("ERROR SENDING EMAIL:", error);
      res.status(400).send("Message not sent.");
    }
  } else {
    res.status(404).send("Not Found");
  }
}
