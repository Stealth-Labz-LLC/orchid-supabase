-- Aggressive RLS Fix Script for contact_submissions
-- This script will completely reset RLS policies and grant explicit permissions
-- Run this in your Supabase SQL Editor

-- Step 1: Drop ALL existing policies
DO $$
DECLARE
  r RECORD;
BEGIN
  FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'contact_submissions')
  LOOP
    EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON contact_submissions';
  END LOOP;
END $$;

-- Step 2: Disable RLS
ALTER TABLE contact_submissions DISABLE ROW LEVEL SECURITY;

-- Step 3: Grant explicit table permissions to anon role
GRANT INSERT ON contact_submissions TO anon;
GRANT INSERT ON contact_submissions TO authenticated;
GRANT SELECT ON contact_submissions TO authenticated;

-- Step 4: Re-enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Step 5: Create permissive policies explicitly for anon role
CREATE POLICY "anon_insert_policy" ON contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "authenticated_insert_policy" ON contact_submissions
  AS PERMISSIVE
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated_select_policy" ON contact_submissions
  AS PERMISSIVE
  FOR SELECT
  TO authenticated
  USING (true);

-- Step 6: Verify the setup
SELECT 'Table RLS Status:' as check_type, relname as table_name, relrowsecurity as rls_enabled
FROM pg_class
WHERE relname = 'contact_submissions'

UNION ALL

SELECT 'Policies:' as check_type, policyname as table_name, cmd::text as rls_enabled
FROM pg_policies
WHERE tablename = 'contact_submissions'

UNION ALL

SELECT 'Permissions:' as check_type, grantee as table_name, privilege_type as rls_enabled
FROM information_schema.table_privileges
WHERE table_name = 'contact_submissions'
AND grantee IN ('anon', 'authenticated');
