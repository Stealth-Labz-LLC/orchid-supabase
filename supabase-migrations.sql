-- Create contact_submissions table
-- Run this SQL in your Supabase SQL Editor (https://app.supabase.com)

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  service VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow INSERT for anonymous users (for form submissions)
CREATE POLICY "Allow anonymous insert" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create a policy to allow INSERT for authenticated users
CREATE POLICY "Allow authenticated insert" ON contact_submissions
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create a policy to allow SELECT only for authenticated users (for viewing submissions)
CREATE POLICY "Allow authenticated read" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE contact_submissions IS 'Stores contact form and demo request submissions from the website';
COMMENT ON COLUMN contact_submissions.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN contact_submissions.email IS 'Email address of the person submitting the form';
COMMENT ON COLUMN contact_submissions.company IS 'Company name (optional)';
COMMENT ON COLUMN contact_submissions.phone IS 'Phone number (optional)';
COMMENT ON COLUMN contact_submissions.service IS 'Type of service the person is interested in';
COMMENT ON COLUMN contact_submissions.message IS 'Message from the person submitting the form';
