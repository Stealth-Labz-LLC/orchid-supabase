-- This script will fix the RLS policies for contact_submissions table
-- Run this in your Supabase SQL Editor

-- First, drop ALL existing policies on the table
DROP POLICY IF EXISTS "Allow public insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated insert" ON contact_submissions;
DROP POLICY IF EXISTS "Allow authenticated read" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for anon users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for all users" ON contact_submissions;

-- Disable RLS temporarily to clean up
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows EVERYONE (including anon) to insert
-- Using 'public' role which includes all users
CREATE POLICY "Enable insert for all users" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy for reading (only authenticated users)
CREATE POLICY "Enable read for authenticated users" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify the policies were created
SELECT schemaname, tablename, policyname, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contact_submissions';
