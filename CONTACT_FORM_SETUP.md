# Contact Form Setup Guide

The contact form is now functional! Currently, it logs submissions to the console. To actually send emails, you need to configure Resend.

## Quick Setup with Resend (Recommended)

### Step 1: Install Resend
```bash
npm install resend
```

### Step 2: Sign up for Resend
1. Go to https://resend.com
2. Sign up for a free account (100 emails/day free)
3. Verify your email address

### Step 3: Get your API Key
1. Go to the Resend dashboard
2. Navigate to "API Keys"
3. Click "Create API Key"
4. Copy your API key (starts with `re_`)

### Step 4: Set up your domain (or use test domain)
- **Option A**: Use Resend's test domain (for testing only)
  - The default `onboarding@resend.dev` works for testing
- **Option B**: Add your own domain (for production)
  - Go to "Domains" in Resend dashboard
  - Add and verify your domain
  - Use an email like `contact@yourdomain.com`

### Step 5: Create `.env.local` file
Create a file named `.env.local` in the root of your project:
```
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_TO_EMAIL=vesh9653@colorado.edu
```

**Important**: Replace:
- `re_your_api_key_here` with your actual Resend API key
- `onboarding@resend.dev` with your verified sender email
- `vesh9653@colorado.edu` with the email where you want to receive messages

### Step 6: Restart your dev server
```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

### Step 7: Test it!
Submit the contact form and check your email inbox!

### Option 2: EmailJS (Client-Side - No Backend Needed)

1. **Sign up for EmailJS**: https://www.emailjs.com
2. **Create an email service** and get your credentials
3. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```
4. **Update Contact.jsx** to use EmailJS instead of the API route

### Option 3: Nodemailer with SMTP

1. **Install Nodemailer**:
   ```bash
   npm install nodemailer
   ```
2. **Configure SMTP settings** in the API route
3. **Add SMTP credentials** to `.env.local`

## Current Status

✅ Form validation works
✅ Form submission works
✅ Success/error messages display
✅ Form resets after successful submission
⚠️ Email sending needs to be configured (currently logs to console)

## Testing

You can test the form right now - it will:
- Validate all fields
- Show success/error messages
- Log the submission to the console (check your terminal where `npm run dev` is running)

Once you configure an email service, submissions will be sent to your email!
