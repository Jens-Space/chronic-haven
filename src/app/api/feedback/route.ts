import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, feedback } = await request.json();

  if (!name || !email || !feedback) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.error('Email credentials not configured');
    return Response.json({ error: 'Email service not configured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: emailUser,
      to: emailUser,
      subject: `New Feedback from ${name}`,
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback:</strong></p>
        <p>${feedback.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send feedback' }, { status: 500 });
  }
}
