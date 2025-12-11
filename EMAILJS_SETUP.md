# EmailJS Setup Guide for Two-Way Messaging

## Current Configuration
- **Service ID**: service_gpxz5uk
- **Public Key**: Xdv2qpbj-Oy36Hf0r
- **Your Email**: aravindant005@gmail.com

## Required Templates

### 1. Template for Admin (Receiving Messages from Clients)
**Template ID**: `template_l1vcmey`

**Variables to use in template**:
- `{{from_name}}` - Client's name
- `{{from_email}}` - Client's email
- `{{subject}}` - Message subject
- `{{message}}` - Full message content
- `{{reply_to_email}}` - Client's email for reply

**Example Template Content**:
```
Hello Admin,

Someone just submitted your form on http://localhost:8081/.

Here's what they had to say:

name:
{{from_name}}

email:
{{from_email}}

subject:
{{subject}}

message:
{{message}}

Reply to: {{reply_to_email}}
```

---

### 2. Template for Client (Confirmation Email)
**Template ID**: `template_client_confirm`

**Variables to use in template**:
- `{{to_email}}` - Client's email
- `{{client_name}}` - Client's name
- `{{subject}}` - Their message subject

**Example Template Content**:
```
Hi {{client_name}},

Thank you for reaching out! I've received your message about "{{subject}}".

I'll review your message and get back to you as soon as possible.

Best regards,
Aravindan

---
This is an automated confirmation email.
```

---

## Steps to Setup in EmailJS

1. Go to https://www.emailjs.com/
2. Login to your account
3. Go to **Email Templates**
4. Create two new templates with the IDs and variables mentioned above
5. Test the templates to ensure variables are working correctly

## How It Works

1. **User sends message** → Email goes to your inbox (template_l1vcmey)
2. **Confirmation sent** → User receives confirmation they can expect a reply (template_client_confirm)
3. **You reply** → You can manually reply to their email directly

---

## Testing

You can test by:
1. Filling the contact form on your portfolio
2. Check your email for the message received
3. Check the client's email for the confirmation

If templates aren't found, EmailJS will show an error. Make sure template IDs match exactly.
