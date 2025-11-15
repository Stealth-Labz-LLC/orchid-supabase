# Supabase Form Setup Guide

This guide will help you set up your Supabase database to work with the contact and demo request forms.

## Prerequisites

- A Supabase account (sign up at https://supabase.com)
- Your Supabase project URL and anon key

## Step 1: Configure Environment Variables

Make sure your `.env.local` file has the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project settings:
1. Go to https://app.supabase.com
2. Select your project
3. Click on Settings → API
4. Copy the Project URL and anon/public key

## Step 2: Create the Database Table

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor (on the left sidebar)
3. Open the file `supabase-migrations.sql` in this project
4. Copy all the SQL code from that file
5. Paste it into the SQL Editor in Supabase
6. Click "Run" to execute the SQL

This will create:
- A `contact_submissions` table with all necessary fields
- Indexes for better query performance
- Row Level Security (RLS) policies
- Automatic timestamp updates

## Step 3: Verify the Setup

After running the SQL:

1. Go to the Table Editor in Supabase
2. You should see a new table called `contact_submissions`
3. Click on it to view the schema

The table should have these columns:
- `id` (UUID, Primary Key)
- `name` (VARCHAR)
- `email` (VARCHAR)
- `company` (VARCHAR, nullable)
- `phone` (VARCHAR, nullable)
- `service` (VARCHAR)
- `message` (TEXT)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Step 4: Test the Forms

1. Run your Next.js development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact page or open the demo request modal

3. Fill out and submit the form

4. Check your Supabase Table Editor to see if the submission appears in the `contact_submissions` table

## Security Notes

### Row Level Security (RLS)

The table has RLS enabled with two policies:

1. **Public Insert**: Anyone can submit forms (INSERT)
2. **Authenticated Read**: Only authenticated users can view submissions (SELECT)

This means:
- Users can submit forms without authentication
- Only you (or authenticated admin users) can view the submissions in Supabase

### Viewing Submissions

To view submissions in your Supabase dashboard:
1. Go to Table Editor
2. Select `contact_submissions`
3. You'll see all submissions

To build an admin panel to view submissions in your app, you'll need to:
1. Set up Supabase authentication
2. Create authenticated routes
3. Query the table with authenticated Supabase client

## API Endpoint

The form submissions are handled by the API route:
- **Endpoint**: `/api/contact`
- **Method**: `POST`
- **Location**: `src/app/api/contact/route.ts`

### Request Body Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc.",
  "phone": "+1 (555) 123-4567",
  "service": "web development",
  "message": "I need help with my website"
}
```

### Response Example

Success (200):
```json
{
  "success": true,
  "message": "Form submitted successfully",
  "data": [{ /* submission data */ }]
}
```

Error (400/500):
```json
{
  "error": "Error message here"
}
```

## Troubleshooting

### Form submission fails with 500 error
- Check that your Supabase credentials in `.env.local` are correct
- Verify the table was created successfully
- Check the browser console and server logs for detailed error messages

### Can't see submissions in Supabase
- Make sure you're logged into the correct Supabase project
- Refresh the Table Editor page
- Check that the SQL migration ran without errors

### RLS policy errors
- Make sure the RLS policies were created (check the Policies tab in Table Editor)
- For public submissions, the "Allow public insert" policy must be enabled

## Optional: Email Notifications

To receive email notifications when forms are submitted, you can:

1. Set up Supabase Edge Functions with email integration
2. Use a third-party service like SendGrid, Mailgun, or Resend
3. Set up Supabase database webhooks

Example using database webhooks:
1. Go to Database → Webhooks in Supabase
2. Create a new webhook for INSERT on `contact_submissions`
3. Configure it to call your email service

## Need Help?

- Supabase Documentation: https://supabase.com/docs
- Supabase Discord: https://discord.supabase.com
