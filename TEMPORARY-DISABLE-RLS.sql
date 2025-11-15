-- TEMPORARY FIX: Disable RLS entirely
-- WARNING: This allows anyone to read/write to the table
-- Only use this temporarily for testing!
-- You MUST run the proper fix-rls-aggressive.sql script after testing

ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- To verify RLS is disabled:
SELECT relname, relrowsecurity as rls_enabled
FROM pg_class
WHERE relname = 'contact_submissions';

-- This should show rls_enabled = false
