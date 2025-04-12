// app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Configure email addresses
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;


/**
 * Verify reCAPTCHA token with Google's API
 */
async function verifyRecaptcha(token) {
    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                secret: process.env.RECAPTCHA_SECRET_KEY,
                response: token,
            }),
        });

        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('reCAPTCHA verification error:', error);
        return false;
    }
}

/**
 * Creates a responsive HTML email template with the form data
 */
function createEmailTemplate(formData) {
    const { fullName, companyName, companyWebsite, phoneNumber, email, message } = formData;
    const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>New Contact Form Submission</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f4f4f4;">
      <div style="max-width:600px; margin:20px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 2px 6px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(to right, #4f46e5, #3b82f6); padding:24px; color:white; text-align:center;">
          <h1 style="margin:0; font-size:22px;">📩 New Contact: BISON BUZZ</h1>
        </div>
        <div style="padding:24px;">
          <p>You received a new message on <strong>${currentDate}</strong>.</p>
  
          <p style="margin-bottom:12px;"><strong>Full Name:</strong><br>${fullName}</p>
          <p style="margin-bottom:12px;"><strong>Email:</strong><br><a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">${email}</a></p>
          ${companyName ? `<p style="margin-bottom:12px;"><strong>Company:</strong><br>${companyName}</p>` : ''}
          ${companyWebsite ? `<p style="margin-bottom:12px;"><strong>Website:</strong><br><a href="${companyWebsite.startsWith('http') ? companyWebsite : 'https://' + companyWebsite}" style="color:#4f46e5; text-decoration:none;" target="_blank">${companyWebsite}</a></p>` : ''}
          ${phoneNumber ? `<p style="margin-bottom:12px;"><strong>Phone:</strong><br>${phoneNumber}</p>` : ''}
  
          <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:16px; margin-top:16px;">
            <p style="margin:0; font-weight:600; color:#4b5563;">Message:</p>
            <p style="margin-top:8px; white-space:pre-line;">${message.replace(/\n/g, '<br>')}</p>
          </div>
  
          <div style="font-size:12px; color:#6b7280; text-align:center; margin-top:24px;">
            <p>This is an automated message. Please don't reply to it directly.</p>
            <p>© ${new Date().getFullYear()} Bison Buzz. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;
}


export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();

        // Extract form data and reCAPTCHA token
        const { fullName, companyName, companyWebsite, phoneNumber, email, message, recaptchaToken } = body;

        // Validate required fields
        if (!fullName || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Verify reCAPTCHA token if provided
        let isRecaptchaValid = true;
        if (recaptchaToken) {
            isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
            if (!isRecaptchaValid) {
                return NextResponse.json(
                    { message: 'reCAPTCHA verification failed' },
                    { status: 400 }
                );
            }
        }

        // Generate email HTML
        const emailHtml = createEmailTemplate({
            fullName,
            companyName,
            companyWebsite,
            phoneNumber,
            email,
            message
        });

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: SENDER_EMAIL,
            to: RECIPIENT_EMAIL,
            subject: `New Contact Form Submission from ${fullName}`,
            html: emailHtml,
            reply_to: email,
        });

        if (error) {
            console.error('Email error:', error);
            return NextResponse.json(
                { message: `Failed to send email: ${error.message}` },
                { status: 500 }
            );
        }

        return NextResponse.json({
            message: 'Your message has been sent successfully!',
            id: data.id
        });

    } catch (error) {
        console.error('Server error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}