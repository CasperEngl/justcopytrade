import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { stripHtml } from 'string-strip-html'

let transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req
  const { name, email, message } = body

  console.log(method)

  switch (method) {
    case 'POST': {
      const html = `<p>New message from justcopytrade.com:</p>
        <h2>Name:</h2>
        <p>${name}</p>
        
        <h2>Email:</h2>
        <p>${email}</p>

        <h2>Message:</h2>
        <p>${message}</p>
      `

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject: 'New message from justcopytrade.com',
        text: stripHtml(html).result,
        html,
      })
    }
    default:
      return res.status(405).send('Method not supported')
  }
}
