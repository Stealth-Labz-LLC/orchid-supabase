-- Comprehensive RLS Diagnostic Script
-- Run this in your Supabase SQL Editor to see what's currently configured

-- 1. Check if table exists
SELECT EXISTS (
  SELECT FROM information_schema.tables
  WHERE table_schema = 'public'
  AND table_name = 'contact_submissions'
) as table_exists;

-- 2. Check if RLS is enabled
SELECT relname, relrowsecurity as rls_enabled
FROM pg_class
WHERE relname = 'contact_submissions';

-- 3. List all current policies
SELECT schemaname, tablename, policyname, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'contact_submissions';

-- 4. Check table permissions for anon role
SELECT
  grantee,
  privilege_type
FROM information_schema.table_privileges
WHERE table_name = 'contact_submissions'
AND grantee IN ('anon', 'authenticated', 'public');

-- 5. Try to see if anon role exists
SELECT rolname
FROM pg_roles
WHERE rolname IN ('anon', 'authenticated', 'public');
