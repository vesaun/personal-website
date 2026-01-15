import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission (you can see this in your terminal)
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // Try to send email using Resend if configured
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.RESEND_TO_EMAIL || 'vesh9653@colorado.edu';
    
    console.log('Email configuration check:', {
      hasApiKey: !!apiKey,
      fromEmail,
      toEmail,
      apiKeyPrefix: apiKey ? apiKey.substring(0, 5) + '...' : 'not set'
    });
    
    if (apiKey) {
      try {
        // Dynamically import resend - will only work if package is installed
        const resendModule = await import('resend').catch((err) => {
          console.error('Failed to import resend:', err);
          return null;
        });
        
        if (resendModule) {
          const { Resend } = resendModule;
          const resend = new Resend(apiKey);
          
          console.log('Attempting to send email via Resend...');
          const result = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p><small>Sent from your personal website contact form</small></p>
            `,
          });
          
          console.log('Resend API response:', JSON.stringify(result, null, 2));
          
          if (result.error) {
            console.error('Resend returned an error:', result.error);
            throw new Error(result.error.message || 'Resend API error');
          }
          
          console.log('✅ Email sent successfully via Resend! ID:', result.data?.id);
        } else {
          console.error('❌ Resend package not installed. Run: npm install resend');
        }
      } catch (emailError) {
        console.error('❌ Error sending email via Resend:', emailError);
        console.error('Error details:', {
          message: emailError.message,
          stack: emailError.stack,
          name: emailError.name
        });
        // Continue and return success even if email fails
      }
    } else {
      console.warn('⚠️ RESEND_API_KEY not set - email not sent. Form submission logged only.');
      console.log('To enable email: 1) npm install resend 2) Add RESEND_API_KEY to .env.local');
    }

    return NextResponse.json(
      { message: 'Message sent successfully! I\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
