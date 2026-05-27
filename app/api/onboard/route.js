import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, company, role, scope, timeline, budget, consent } = await req.json();

    if (!name || !email || !consent) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Structured HTML Email Template
    const mailOptions = {
      from: email,
      to: "marketing.tribetek@gmail.com",
      subject: `🚀 NEW ONBOARDING BRIEF: ${company} (${name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #ED4716; border-bottom: 2px solid #ED4716; padding-bottom: 10px;">New Onboarding Submission</h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #0F172A; margin-bottom: 5px;">01. Professional Identity</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Role:</strong> ${role}</p>
          </div>

          <div style="margin-top: 20px; background: #f9f9f9; padding: 15px; border-radius: 8px;">
            <h3 style="color: #0F172A; margin-bottom: 5px;">02. Operational Brief</h3>
            <p><strong>Scope & Problems:</strong><br/>${scope}</p>
            <p><strong>Target Timeline:</strong> ${timeline}</p>
            <p><strong>Estimated Budget:</strong> ${budget}</p>
          </div>

          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p><strong>Consent Provided:</strong> ${consent ? "Yes" : "No"}</p>
            <p>This message was generated from the TribeTek Onboarding System.</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Brief deployed successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to deploy technical brief." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
