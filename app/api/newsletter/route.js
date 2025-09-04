import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, purpose, message, consent } = await req.json();

    if (!name || !phone || !email || !consent) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configure your email transporter (use your email credentials)
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or another email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email app password
      },
    });

    // Compose the email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // your email where submissions go
      subject: `New Newsletter Submission from ${name}`,
      html: `
        <h3>New Newsletter Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Consent:</strong> ${consent ? "Yes" : "No"}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Try again." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
